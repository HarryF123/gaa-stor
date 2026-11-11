package com.example.backend.player;
public record PlayerDto(
    Long id,
    String firstName,
    String lastName,
    String position,
    Integer jerseyNumber
) {}
