package com.example.backend.player;

public record PlayerStatInput(
    Long playerId,
    Integer goals,
    Integer twoPointers,
    Integer standardPoints,
    Integer yellowCards,
    Integer redCards
) {}