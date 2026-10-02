package com.example.backend.geo;

import java.math.BigDecimal;
import java.util.List;

public record ClubSearchDto(Long id, String name, String county, List<PitchDto> pitches) {

    public record PitchDto(Long id, String name, BigDecimal lat, BigDecimal lng) {
    }
}
