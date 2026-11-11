// ClubController.java
package com.example.backend.club;

import com.example.backend.match.MatchRecordDto;
import com.example.backend.match.MatchSubmissionDto;
import com.example.backend.player.PlayerDto;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/clubs")
public class ClubController {

    private final ClubService clubService;
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParamJdbc;

    // 🟢 FIXED: All database execution beans are injected through the constructor
    // parameter list
    public ClubController(
            ClubService clubService,
            JdbcTemplate jdbcTemplate,
            NamedParameterJdbcTemplate namedParamJdbc) {
        this.clubService = clubService;
        this.jdbcTemplate = jdbcTemplate;
        this.namedParamJdbc = namedParamJdbc;
    }

    /**
     * Maps to: /api/clubs/{id}/players
     * Called by frontend hook: useClubPlayers(clubId)
     */
    @GetMapping("/{id}/players")
    public List<PlayerDto> getClubPlayers(@PathVariable("id") Long id) {
        return clubService.getPlayersByClubId(id);
    }

    /**
     * Maps to: /api/clubs/{id}/matches
     * Called by frontend hook: useClubMatches(clubId)
     */
    @GetMapping("/{id}/matches")
    public List<MatchRecordDto> getClubMatches(@PathVariable("id") Long id) {
        return clubService.getMatchesByClubId(id);
    }

    /**
     * POST /api/clubs/games
     * Handles recording a full new game atomic transaction layout safely.
     */
    @PostMapping("/games")
    @Transactional
    public ResponseEntity<Void> recordNewGame(@RequestBody MatchSubmissionDto dto) {
        // 1. Insert the Core Match Result Row and return its auto-generated numeric ID
        String resultSql = """
                    INSERT INTO results (club_id, competition_id, opponent, venue, played_at, competition_name, outcome)
                    SELECT :clubId, :compId, :opponent, :venue, :playedAt, c.name, :outcome
                    FROM competitions c WHERE c.id = :compId
                    RETURNING id
                """;

        Map<String, Object> params = Map.of(
                "clubId", dto.clubId(),
                "compId", dto.competitionId(),
                "opponent", dto.opponent(),
                "venue", dto.venue(),
                "playedAt", dto.playedAt(),
                "outcome", dto.outcome());

        Long resultId = namedParamJdbc.queryForObject(resultSql, params, Long.class);

        if (resultId == null) {
            return ResponseEntity.internalServerError().build();
        }

        // 2. Write Team Scores Profile
        String scoresSql = "INSERT INTO scores (result_id, goals, two_pointers, standard_points) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(scoresSql, resultId, dto.teamGoals(), dto.teamTwoPointers(), dto.teamStandardPoints());

        // 3. Write Conceded Opponent Scores Profile
        String concededSql = "INSERT INTO conceded (result_id, goals, two_pointers, standard_points) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(concededSql, resultId, dto.opponentGoals(), dto.opponentTwoPointers(),
                dto.opponentStandardPoints());

        // 4. Batch Process Individual Player Statistics Rows
        String statsSql = """
                    INSERT INTO player_result_stats
                    (player_id, result_id, goals, two_pointers, standard_points, conceded_goals, conceded_points, yellow_cards, red_cards)
                    VALUES (?, ?, ?, ?, ?, 0, 0, ?, ?)
                """;

        for (var p : dto.playerStats()) {
            jdbcTemplate.update(statsSql,
                    p.playerId(),
                    resultId,
                    p.goals(),
                    p.twoPointers(),
                    p.standardPoints(),
                    p.yellowCards(),
                    p.redCards());
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/competitions/{id}/teams")
    public List<Map<String, Object>> getTeamsInCompetition(@PathVariable("id") Long compId) {
        String sql = """
                    SELECT gc.id, gc.name
                    FROM gaa_clubs gc
                    JOIN club_competitions cc ON cc.club_id = gc.id
                    WHERE cc.competition_id = ?
                    ORDER BY gc.name ASC
                """;
        return jdbcTemplate.queryForList(sql, compId);
    }

    @GetMapping("/counties/{name}/venues")
    public List<Map<String, Object>> getVenuesByCounty(@PathVariable("name") String countyName) {
        String sql = """
                    SELECT cp.id, cp.name
                    FROM club_pitches cp
                    JOIN gaa_clubs gc ON cp.club_id = gc.id
                    JOIN counties c ON gc.county_id = c.id
                    WHERE LOWER(TRIM(c.name)) = LOWER(TRIM(?))
                    ORDER BY cp.name ASC
                """;
        return jdbcTemplate.queryForList(sql, countyName);
    }

}
