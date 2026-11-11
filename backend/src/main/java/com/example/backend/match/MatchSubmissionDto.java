package com.example.backend.match;

import java.time.LocalDateTime;
import java.util.List;

import com.example.backend.player.PlayerStatInput;

public record MatchSubmissionDto(
    Long clubId,
    Long competitionId,
    String opponent,
    String venue,
    LocalDateTime playedAt,
    String outcome,
    Integer teamGoals,
    Integer teamTwoPointers,
    Integer teamStandardPoints,
    Integer opponentGoals,
    Integer opponentTwoPointers,
    Integer opponentStandardPoints,
    List<PlayerStatInput> playerStats
) {}


