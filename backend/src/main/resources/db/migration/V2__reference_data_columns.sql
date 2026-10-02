ALTER TABLE counties
    ADD COLUMN province         VARCHAR(20),
    ADD COLUMN country          VARCHAR(30),
    ADD COLUMN stadium          VARCHAR(150),
    ADD COLUMN primary_colour   VARCHAR(7),
    ADD COLUMN secondary_colour VARCHAR(7),
    ADD COLUMN tertiary_colour  VARCHAR(7),
    ADD COLUMN map_center_lng   NUMERIC(9,6),
    ADD COLUMN map_center_lat   NUMERIC(9,6),
    ADD COLUMN map_zoom         NUMERIC(4,2);

ALTER TABLE gaa_clubs
    ADD COLUMN gaa_code         VARCHAR(20) CHECK (gaa_code IN ('HURLING', 'FOOTBALL', 'MIXED')),
    ADD COLUMN twitter_url      VARCHAR(200),
    ADD COLUMN wikipedia_url    VARCHAR(300),
    ADD COLUMN crest_url        VARCHAR(300),
    ADD COLUMN primary_colour   VARCHAR(7),
    ADD COLUMN secondary_colour VARCHAR(7),
    ADD CONSTRAINT gaa_clubs_county_name_key UNIQUE (county_id, name);

CREATE TABLE club_pitches (
    id        BIGSERIAL PRIMARY KEY,
    club_id   BIGINT NOT NULL REFERENCES gaa_clubs(id) ON DELETE CASCADE,
    name      VARCHAR(150),
    latitude  NUMERIC(9,6) NOT NULL,
    longitude NUMERIC(9,6) NOT NULL
);
CREATE INDEX club_pitches_club_id_idx ON club_pitches(club_id);