package com.example.backend.player;

public record PlayerOverallStats(
    Long playerId,
    String firstName,
    String lastName,
    long careerAppearances,
    long careerGoals,
    long careerTwoPointers,
    long careerStandardPoints,
    long careerTotalPoints,
    long totalYellowCards,
    long totalRedCards
) {
    public PlayerOverallStats(Long playerId, String firstName, String lastName, long careerAppearances, 
                              long careerGoals, long careerTwoPointers, long careerStandardPoints,
                              long totalYellowCards, long totalRedCards) {
        this(
            playerId, firstName, lastName, careerAppearances, careerGoals, careerTwoPointers, careerStandardPoints,
            (careerGoals * 3) + (careerTwoPointers * 2) + careerStandardPoints,
            totalYellowCards, totalRedCards
        );
    }
}
