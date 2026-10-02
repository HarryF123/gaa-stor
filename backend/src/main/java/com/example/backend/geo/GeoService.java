package com.example.backend.geo;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class GeoService {

    private static final int MIN_SEARCH_LENGTH = 2;
    private static final int MAX_SEARCH_RESULTS = 20;

    private final GeoRepository repo;

    public GeoService(GeoRepository repo) {
        this.repo = repo;
    }

    public List<CountyDto> counties() {
        return repo.findCounties();
    }

    public List<PitchMarkerDto> pitchMarkers(String county) {
        return repo.findPitchMarkers(county.trim());
    }

    public List<ClubSearchDto> searchClubs(String term) {
        String q = term == null ? "" : term.trim();
        if (q.length() < MIN_SEARCH_LENGTH) {
            return List.of();
        }

        List<ClubRow> clubs = repo.searchClubs(q, PageRequest.of(0, MAX_SEARCH_RESULTS));
        if (clubs.isEmpty()) {
            return List.of();
        }

        Map<Long, List<ClubSearchDto.PitchDto>> pitchesByClub = repo
                .findPitchesForClubs(clubs.stream().map(ClubRow::id).toList())
                .stream()
                .collect(Collectors.groupingBy(
                        ClubPitchRow::clubId,
                        Collectors.mapping(
                                p -> new ClubSearchDto.PitchDto(p.id(), p.name(), p.latitude(), p.longitude()),
                                Collectors.toList())));

        return clubs.stream()
                .map(c -> new ClubSearchDto(c.id(), c.name(), c.county(),
                        pitchesByClub.getOrDefault(c.id(), List.of())))
                .toList();
    }
}
