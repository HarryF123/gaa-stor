package com.example.backend.competition;

import com.example.backend.competition.CompetitionLookupDto;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/competitions")
public class CompetitionController {

    private final JdbcTemplate jdbcTemplate;

    // Inject active database context parameters through constructor auto-wiring
    public CompetitionController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * 🟢 GET /api/competitions/lookup
     * Exposes the active championships catalog list.
     * Matches frontend fetch target hook: useCompetitionsLookup()
     */
    @GetMapping("/lookup")
    public List<CompetitionLookupDto> getCompetitionsLookupList() {
        String sql = "SELECT id, name, season FROM competitions ORDER BY season DESC, name ASC";

        return jdbcTemplate.query(sql, (rs, rowNum) -> new CompetitionLookupDto(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("season")
        ));
    }

    /**
     * 🟢 NEW: Handles fetching opponent teams at /api/competitions/{id}/teams
     * Matches frontend fetch target hook: useCompetitionTeams(compId)
     */
    @GetMapping("/{id}/teams")
    public List<Map<String, Object>> getTeamsInCompetition(@PathVariable("id") Long id) {
        String sql = """
            SELECT gc.id AS id, gc.name AS name 
            FROM gaa_clubs gc
            JOIN club_competitions cc ON cc.club_id = gc.id
            WHERE cc.competition_id = ?
            ORDER BY gc.name ASC
        """;
        
        return jdbcTemplate.queryForList(sql, id);
    }
}
