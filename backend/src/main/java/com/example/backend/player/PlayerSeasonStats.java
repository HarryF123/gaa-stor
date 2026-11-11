package com.example.backend.player;

public record PlayerSeasonStats(
    Long playerId,
    String firstName,
    String lastName,
    String competitionName,
    String season,
    long appearances,
    long totalGoals,
    long totalTwoPointers,
    long totalStandardPoints,
    long totalPointsScored // Aggregated via constructor mapping logic
) {
    public PlayerSeasonStats(Long playerId, String firstName, String lastName, String competitionName, 
                             String season, long appearances, long totalGoals, long totalTwoPointers, 
                             long totalStandardPoints) {
        this(
            playerId, firstName, lastName, competitionName, season, appearances, totalGoals, totalTwoPointers, totalStandardPoints,
            (totalGoals * 3) + (totalTwoPointers * 2) + totalStandardPoints
        );
    }
}
