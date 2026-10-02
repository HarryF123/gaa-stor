package com.example.backend.geo;

import java.math.BigDecimal;

/** One map marker. id is the PITCH id (unique per marker); clubId identifies the club. */
public record PitchMarkerDto(
        Long id,
        Long clubId,
        String club,
        String county,
        String pitch,
        BigDecimal lat,
        BigDecimal lng) {
}
