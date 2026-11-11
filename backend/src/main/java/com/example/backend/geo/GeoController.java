package com.example.backend.geo;

import com.example.backend.club.ClubSearchDto;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeoController {

    private final GeoService service;

    public GeoController(GeoService service) {
        this.service = service;
    }

    @GetMapping("/counties")
    public List<CountyDto> counties() {
        return service.counties();
    }

    @GetMapping("/counties/{name}/pitches")
    public List<PitchMarkerDto> pitches(@PathVariable("name") String name) {
        return service.pitchMarkers(name);
    }

    @GetMapping("/clubs")
    public List<ClubSearchDto> clubs(@RequestParam(name = "search", defaultValue = "") String search) {
        return service.searchClubs(search);
    }

    @GetMapping("/clubs/{id}")
    public ResponseEntity<ClubSearchDto> club(@PathVariable("id") Long id) {
        return service.clubById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
