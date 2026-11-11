-- ============================================================================
-- 1. ENUM & TYPE CONFIGURATIONS
-- ============================================================================
CREATE TYPE user_role AS ENUM (
    'DEV_ADMIN',
    'CLUB_ADMIN',
    'COACH_MANAGER_PLAYER',
    'REGULAR_USER'
);

CREATE TYPE competition_type AS ENUM (
    'FRIENDLY',
    'LEAGUE',
    'GROUP_KNOCKOUT'
);

CREATE TYPE competition_stage AS ENUM (
    'NOT_STARTED',
    'GROUP_STAGE',
    'QUARTER_FINAL',
    'SEMI_FINAL',
    'FINAL',
    'COMPLETED'
);

-- ============================================================================
-- 2. CORE REGIONAL & DIRECTORY ENTITIES
-- ============================================================================
CREATE TABLE counties (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(20) UNIQUE,
    province VARCHAR(20),
    country VARCHAR(30),
    stadium VARCHAR(150),
    primary_colour VARCHAR(7),
    secondary_colour VARCHAR(7),
    tertiary_colour VARCHAR(7),
    map_center_lng NUMERIC(9,6),
    map_center_lat NUMERIC(9,6),
    map_zoom NUMERIC(4,2)
);

CREATE TABLE gaa_clubs (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    county_id BIGINT REFERENCES counties(id),
    code VARCHAR(20) UNIQUE,
    gaa_code VARCHAR(20) CHECK (gaa_code IN ('HURLING', 'FOOTBALL', 'MIXED')),
    twitter_url VARCHAR(200),
    wikipedia_url VARCHAR(300),
    crest_url VARCHAR(300),
    primary_colour VARCHAR(7),
    secondary_colour VARCHAR(7),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT gaa_clubs_county_name_key UNIQUE (county_id, name)
);

CREATE TABLE club_pitches (
    id BIGSERIAL PRIMARY KEY,
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    name VARCHAR(150),
    latitude NUMERIC(9,6) NOT NULL,
    longitude NUMERIC(9,6) NOT NULL
);

-- ============================================================================
-- 3. COMPETITION & SCHEDULE LAYER
-- ============================================================================
CREATE TABLE competitions (
    id BIGSERIAL PRIMARY KEY,
    county_id BIGINT REFERENCES counties(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    season VARCHAR(20),
    type competition_type NOT NULL DEFAULT 'GROUP_KNOCKOUT',
    current_stage competition_stage NOT NULL DEFAULT 'NOT_STARTED',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (county_id, name, season)
);

CREATE TABLE club_competitions (
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    competition_id BIGINT NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
    stage_reached competition_stage,   -- furthest stage this club reached
    final_position SMALLINT,           -- e.g. 3 = finished 3rd in the league
    PRIMARY KEY (club_id, competition_id)
);

CREATE TABLE competition_historical_winners (
    id BIGSERIAL PRIMARY KEY,
    competition_id BIGINT NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
    winning_club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    year INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_competition_year UNIQUE (competition_id, year)
);

-- ============================================================================
-- 4. ROSTER & ATHLETE DATA
-- ============================================================================
CREATE TABLE players (
    id BIGSERIAL PRIMARY KEY,
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    position VARCHAR(50),
    jersey_number SMALLINT,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT players_jersey_number_check CHECK (jersey_number IS NULL OR jersey_number BETWEEN 1 AND 99)
);

-- ============================================================================
-- 5. MATCH OPERATIONS & RESULTS (2-POINTERS, SEASON + STAGE)
-- ============================================================================
CREATE TABLE results (
    id BIGSERIAL PRIMARY KEY,
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    competition_id BIGINT REFERENCES competitions(id),
    opponent VARCHAR(150) NOT NULL,
    venue VARCHAR(150),
    played_at TIMESTAMP NOT NULL,
    season VARCHAR(20) NOT NULL,       -- e.g. '2026'; set from the competition, else year of played_at
    stage competition_stage,           -- stage of the competition this match was played in
    competition VARCHAR(150),
    competition_name VARCHAR(255),
    outcome VARCHAR(10) NOT NULL CHECK (outcome IN ('WIN', 'DRAW', 'LOSS')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fixtures (
    id BIGSERIAL PRIMARY KEY,
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    competition_id BIGINT REFERENCES competitions(id),
    opponent VARCHAR(150) NOT NULL,
    venue VARCHAR(150),
    scheduled_at TIMESTAMP NOT NULL,
    stage competition_stage,
    status VARCHAR(20) NOT NULL DEFAULT 'SCHEDULED'
        CHECK (status IN ('SCHEDULED', 'POSTPONED', 'CANCELLED', 'COMPLETED')),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scores (
    id BIGSERIAL PRIMARY KEY,
    result_id BIGINT NOT NULL UNIQUE REFERENCES results(id) ON DELETE CASCADE,
    goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
    two_pointers SMALLINT NOT NULL DEFAULT 0 CHECK (two_pointers >= 0),
    standard_points SMALLINT NOT NULL DEFAULT 0 CHECK (standard_points >= 0),
    total INTEGER GENERATED ALWAYS AS ((goals * 3) + (two_pointers * 2) + standard_points) STORED
);

CREATE TABLE conceded (
    id BIGSERIAL PRIMARY KEY,
    result_id BIGINT NOT NULL UNIQUE REFERENCES results(id) ON DELETE CASCADE,
    goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
    two_pointers SMALLINT NOT NULL DEFAULT 0 CHECK (two_pointers >= 0),
    standard_points SMALLINT NOT NULL DEFAULT 0 CHECK (standard_points >= 0),
    total INTEGER GENERATED ALWAYS AS ((goals * 3) + (two_pointers * 2) + standard_points) STORED
);

CREATE TABLE player_result_stats (
    id BIGSERIAL PRIMARY KEY,
    player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
    result_id BIGINT NOT NULL REFERENCES results(id) ON DELETE CASCADE,
    goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
    two_pointers SMALLINT NOT NULL DEFAULT 0 CHECK (two_pointers >= 0),
    standard_points SMALLINT NOT NULL DEFAULT 0 CHECK (standard_points >= 0),
    conceded_goals SMALLINT NOT NULL DEFAULT 0 CHECK (conceded_goals >= 0),
    conceded_points SMALLINT NOT NULL DEFAULT 0 CHECK (conceded_points >= 0),
    yellow_cards SMALLINT NOT NULL DEFAULT 0 CHECK (yellow_cards >= 0),
    red_cards SMALLINT NOT NULL DEFAULT 0 CHECK (red_cards >= 0),
    UNIQUE (player_id, result_id)
);

-- ============================================================================
-- 6. SECURITY & SUBSCRIPTION MANAGEMENT
-- ============================================================================
CREATE TABLE secure_users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    role user_role NOT NULL DEFAULT 'REGULAR_USER',
    club_id BIGINT REFERENCES gaa_clubs(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_favourite_clubs (
    user_id BIGINT NOT NULL REFERENCES secure_users(id) ON DELETE CASCADE,
    club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, club_id)
);

CREATE TABLE user_favourite_players (
    user_id BIGINT NOT NULL REFERENCES secure_users(id) ON DELETE CASCADE,
    player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, player_id)
);

CREATE TABLE user_favourite_competitions (
    user_id BIGINT NOT NULL REFERENCES secure_users(id) ON DELETE CASCADE,
    competition_id BIGINT NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, competition_id)
);

-- ============================================================================
-- 7. PERFORMANCE LOOKUP INDEXES
-- ============================================================================
CREATE INDEX gaa_clubs_county_id_idx ON gaa_clubs(county_id);
CREATE INDEX club_pitches_club_id_idx ON club_pitches(club_id);
CREATE INDEX club_competitions_competition_id_idx ON club_competitions(competition_id);
CREATE INDEX idx_historical_winners_competition_id ON competition_historical_winners(competition_id);
CREATE INDEX players_club_id_idx ON players(club_id);
CREATE INDEX results_club_id_played_at_idx ON results(club_id, played_at DESC);
CREATE INDEX results_club_season_idx ON results(club_id, season);
CREATE INDEX results_competition_id_idx ON results(competition_id);
CREATE INDEX fixtures_club_id_scheduled_at_idx ON fixtures(club_id, scheduled_at);
CREATE INDEX player_result_stats_player_id_idx ON player_result_stats(player_id);
CREATE INDEX player_result_stats_result_id_idx ON player_result_stats(result_id);
CREATE INDEX secure_users_club_idx ON secure_users(club_id);
CREATE INDEX idx_user_favourite_clubs ON user_favourite_clubs(user_id);
CREATE INDEX idx_user_favourite_players ON user_favourite_players(user_id);
CREATE INDEX idx_user_favourite_competitions ON user_favourite_competitions(user_id);

-- ============================================================================
-- 8. SEASON AGGREGATE VIEWS (always up to date, nothing to maintain)
-- ============================================================================
CREATE VIEW player_season_stats AS
SELECT prs.player_id,
       r.season,
       COUNT(*)                                                         AS appearances,
       SUM(prs.goals)                                                   AS goals,
       SUM(prs.two_pointers)                                            AS two_pointers,
       SUM(prs.standard_points)                                         AS standard_points,
       SUM(prs.goals * 3 + prs.two_pointers * 2 + prs.standard_points)  AS total,
       SUM(prs.conceded_goals)                                          AS conceded_goals,
       SUM(prs.conceded_points)                                         AS conceded_points,
       SUM(prs.yellow_cards)                                            AS yellow_cards,
       SUM(prs.red_cards)                                               AS red_cards
FROM player_result_stats prs
JOIN results r ON r.id = prs.result_id
GROUP BY prs.player_id, r.season;

CREATE VIEW club_season_summary AS
SELECT r.club_id,
       r.season,
       COUNT(*)                                    AS played,
       COUNT(*) FILTER (WHERE r.outcome = 'WIN')   AS wins,
       COUNT(*) FILTER (WHERE r.outcome = 'DRAW')  AS draws,
       COUNT(*) FILTER (WHERE r.outcome = 'LOSS')  AS losses,
       COALESCE(SUM(s.total), 0)                   AS scored,
       COALESCE(SUM(c.total), 0)                   AS conceded
FROM results r
LEFT JOIN scores   s ON s.result_id = r.id
LEFT JOIN conceded c ON c.result_id = r.id
GROUP BY r.club_id, r.season;