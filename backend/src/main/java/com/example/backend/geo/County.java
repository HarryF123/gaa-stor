package com.example.backend.geo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "counties")
public class County {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String province;
    private String country;
    private String stadium;
    private String primaryColour;
    private String secondaryColour;
    private String tertiaryColour;

    // NUMERIC columns must be BigDecimal or ddl-auto=validate will reject them
    private BigDecimal mapCenterLng;
    private BigDecimal mapCenterLat;
    private BigDecimal mapZoom;
}
