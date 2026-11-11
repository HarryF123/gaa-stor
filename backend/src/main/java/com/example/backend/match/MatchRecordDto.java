package com.example.backend.match;
import java.time.LocalDateTime;

public record MatchRecordDto(
    Long id,
    String opponent,
    String venue,
    LocalDateTime playedAt,
    String competitionName,
    String outcome, // "WIN", "LOSS", "DRAW"
    Integer scoredGoals,
    Integer scoredPoints,
    Integer concededGoals,
    Integer concededPoints
) {}

