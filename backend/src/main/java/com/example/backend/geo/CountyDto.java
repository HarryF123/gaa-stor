package com.example.backend.geo;

import java.math.BigDecimal;
import java.util.List;

/** Same shape as the frontend's old CountyConfig, plus name/province/country. */
public record CountyDto(
        String name,
        String province,
        String country,
        String stadium,
        String primaryColor,
        String secondaryColor,
        String tertiaryColor,
        List<Double> center, // [lng, lat]
        double zoom) {

    // Used by the "select new" query in GeoRepository
    public CountyDto(String name, String province, String country, String stadium,
                     String primaryColor, String secondaryColor, String tertiaryColor,
                     BigDecimal lng, BigDecimal lat, BigDecimal zoom) {
        this(name, province, country, stadium, primaryColor, secondaryColor, tertiaryColor,
                List.of(lng.doubleValue(), lat.doubleValue()), zoom.doubleValue());
    }
}
