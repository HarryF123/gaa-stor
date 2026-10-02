-- GAA Stór -- A Typescript written, React GAA Statistics application -> Currently a prototype, maps Ireland using GeoJSON coordinates (sourced from GitHub, further augmented through the use of Claude to include the 6 northern counties). Upon clicking on any of the counties, the GAA pitches will be mapped on the zoomed section. These coordinates were sourced from the GAA Pitch Finder (gaapitchfinder.com) dataset.

Front end is using Mantine UI library for User Interface components, along with use of tabler and phosphor icons. Currently has placeholders for extra sub-app/pages to be added, surrounding clubs, platers, competitions. These are contingent on login capabilities, also yet to be implemented.

Backend is Java Persistent API. Initialized through a .mjs seed file. County and Club Assets (co-ordinates, colours etc.) are now stored in Postgres DB. Player DB Tables in place, yet to be populated. Relation between teams for A Competitions, B Fixtures and C Results, yet to be implemented. 

User Capabilities (club exec to update club info and players, trainer/ coach to view player stats (in more depth), fan/ normal user) yet to be figured out/ implemented.

NOTE: 
-> Regarding Players PM tiles: figuring out correct storage for it, for now, remains local, for dev purposes.
-> Regarding generate-seed.mjs: county_assets/ county_pitch_assets remain local, removed from repo - on previous commits
--