package com.example.backend.geo;

import java.math.BigDecimal;

/** Internal row used to attach pitches to search results. */
public record ClubPitchRow(Long clubId, Long id, String name, BigDecimal latitude, BigDecimal longitude) {
}
