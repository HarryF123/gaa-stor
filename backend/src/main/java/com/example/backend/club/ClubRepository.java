package com.example.backend.club;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

// Dummy entity mapping just to satisfy JpaRepository compilation bounds
@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {

    @Query(value = """
        SELECT id, first_name, last_name, position
        FROM players
        WHERE club_id = :clubId
        ORDER BY jersey_number ASC
        """, nativeQuery = true)
    List<Object[]> findPlayersByClubIdNative(@Param("clubId") Long clubId);

    @Query(value = """
        SELECT 
            r.id,
            r.opponent,
            r.venue,
            r.played_at,
            r.competition_name,
            r.outcome,
            COALESCE(s.goals, 0) AS scored_goals,
            COALESCE(s.standard_points, 0) AS scored_points,
            COALESCE(c.goals, 0) AS conceded_goals,
            COALESCE(c.standard_points, 0) AS conceded_points
        FROM results r
        LEFT JOIN scores s ON s.result_id = r.id
        LEFT JOIN conceded c ON c.result_id = r.id
        WHERE r.club_id = :clubId
        ORDER BY r.played_at DESC
        """, nativeQuery = true)
    List<Object[]> findMatchesByClubIdNative(@Param("clubId") Long clubId);
}
