package com.example.backend.player;

import com.example.backend.player.PlayerOverallStats;
import com.example.backend.player.PlayerSeasonStats;
import jakarta.persistence.EntityManager;
import java.util.List;

public class PlayerStatsRepository {

    private final EntityManager em;

    public PlayerStatsRepository(EntityManager em) {
        this.em = em;
    }

    /**
     * Calculates a player's single-season metrics across a targeted tournament structure
     */
    public List<PlayerSeasonStats> findSeasonStatsByClub(Long clubId, String season) {
        String jpql = """
            SELECT new com.example.backend.player.PlayerSeasonStats(
                p.id, p.firstName, p.lastName, c.name, c.season,
                COUNT(s.id),
                SUM(s.goals),
                SUM(s.twoPointers),
                SUM(s.standardPoints)
            )
            FROM PlayerResultStats s
            JOIN s.player p
            JOIN s.result r
            JOIN r.competition c
            WHERE p.club.id = :clubId AND c.season = :season
            GROUP BY p.id, p.firstName, p.lastName, c.name, c.season
            ORDER BY (SUM(s.goals) * 3 + SUM(s.twoPointers) * 2 + SUM(s.standardPoints)) DESC
        """;

        return em.createQuery(jpql, PlayerSeasonStats.class)
                 .setParameter("clubId", clubId)
                 .setParameter("season", season)
                 .getResultList();
    }

    /**
     * Aggregates lifetime totals for an individual player profile view
     */
    public PlayerOverallStats findCareerTotals(Long playerId) {
        String jpql = """
            SELECT new com.example.backend.player.PlayerOverallStats(
                p.id, p.firstName, p.lastName,
                COUNT(s.id),
                SUM(s.goals),
                SUM(s.twoPointers),
                SUM(s.standardPoints),
                SUM(s.yellowCards),
                SUM(s.redCards)
            )
            FROM PlayerResultStats s
            JOIN s.player p
            WHERE p.id = :playerId
            GROUP BY p.id, p.firstName, p.lastName
        """;

        return em.createQuery(jpql, PlayerOverallStats.class)
                 .setParameter("playerId", playerId)
                 .getSingleResult();
    }
}
