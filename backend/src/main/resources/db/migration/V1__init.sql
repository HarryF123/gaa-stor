CREATE TABLE counties (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	code VARCHAR(20) UNIQUE
);

CREATE TABLE gaa_clubs (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	county_id BIGINT REFERENCES counties(id),
	code VARCHAR(20) UNIQUE,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competitions (
	id BIGSERIAL PRIMARY KEY,
	county_id BIGINT REFERENCES counties(id) ON DELETE CASCADE,
	name VARCHAR(150) NOT NULL,
	season VARCHAR(20),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE (county_id, name, season)
);

CREATE TABLE club_competitions (
	club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
	competition_id BIGINT NOT NULL REFERENCES competitions(id) ON DELETE CASCADE,
	PRIMARY KEY (club_id, competition_id)
);

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

CREATE TABLE results (
	id BIGSERIAL PRIMARY KEY,
	club_id BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
	competition_id BIGINT REFERENCES competitions(id),
	opponent VARCHAR(150) NOT NULL,
	venue VARCHAR(150),
	played_at TIMESTAMP NOT NULL,
	competition VARCHAR(150),
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
	status VARCHAR(20) NOT NULL DEFAULT 'SCHEDULED'
		CHECK (status IN ('SCHEDULED', 'POSTPONED', 'CANCELLED', 'COMPLETED')),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scores (
	id BIGSERIAL PRIMARY KEY,
	result_id BIGINT NOT NULL UNIQUE REFERENCES results(id) ON DELETE CASCADE,
	goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
	points SMALLINT NOT NULL DEFAULT 0 CHECK (points >= 0),
	total INTEGER GENERATED ALWAYS AS ((goals * 3) + points) STORED
);

CREATE TABLE conceded (
	id BIGSERIAL PRIMARY KEY,
	result_id BIGINT NOT NULL UNIQUE REFERENCES results(id) ON DELETE CASCADE,
	goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
	points SMALLINT NOT NULL DEFAULT 0 CHECK (points >= 0),
	total INTEGER GENERATED ALWAYS AS ((goals * 3) + points) STORED
);

CREATE TABLE player_result_stats (
	id BIGSERIAL PRIMARY KEY,
	player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
	result_id BIGINT NOT NULL REFERENCES results(id) ON DELETE CASCADE,
	goals SMALLINT NOT NULL DEFAULT 0 CHECK (goals >= 0),
	points SMALLINT NOT NULL DEFAULT 0 CHECK (points >= 0),
	conceded_goals SMALLINT NOT NULL DEFAULT 0 CHECK (conceded_goals >= 0),
	conceded_points SMALLINT NOT NULL DEFAULT 0 CHECK (conceded_points >= 0),
	yellow_cards SMALLINT NOT NULL DEFAULT 0 CHECK (yellow_cards >= 0),
	red_cards SMALLINT NOT NULL DEFAULT 0 CHECK (red_cards >= 0),
	UNIQUE (player_id, result_id)
);

CREATE INDEX players_club_id_idx ON players(club_id);
CREATE INDEX gaa_clubs_county_id_idx ON gaa_clubs(county_id);
CREATE INDEX club_competitions_competition_id_idx ON club_competitions(competition_id);
CREATE INDEX results_club_id_played_at_idx ON results(club_id, played_at DESC);
CREATE INDEX fixtures_club_id_scheduled_at_idx ON fixtures(club_id, scheduled_at);
CREATE INDEX player_result_stats_player_id_idx ON player_result_stats(player_id);
