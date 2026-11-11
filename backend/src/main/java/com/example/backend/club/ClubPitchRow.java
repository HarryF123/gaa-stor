package com.example.backend.club;

import java.math.BigDecimal;

/** Internal row used to attach pitches to search results. */
public record ClubPitchRow(Long clubId, Long id, String name, BigDecimal latitude, BigDecimal longitude) {
}
