// ClubService.java
package com.example.backend.club;

import com.example.backend.match.MatchRecordDto;
import com.example.backend.player.PlayerDto;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class ClubService {

    private final ClubRepository repository;

    public ClubService(ClubRepository repository) {
        this.repository = repository;
    }

    public List<PlayerDto> getPlayersByClubId(Long clubId) {
        List<Object[]> rows = repository.findPlayersByClubIdNative(clubId);
        return rows.stream().map(row -> new PlayerDto(
            ((Number) row[0]).longValue(),
            (String) row[1],
            (String) row[2],
            (String) row[3],
            ((Number) row[4]).intValue()
        )).collect(Collectors.toList());
    }

    public List<MatchRecordDto> getMatchesByClubId(Long clubId) {
        List<Object[]> rows = repository.findMatchesByClubIdNative(clubId);
        return rows.stream().map(row -> new MatchRecordDto(
            ((Number) row[0]).longValue(),
            (String) row[1],
            (String) row[2],
            (java.time.LocalDateTime) row[3],
            (String) row[4],
            (String) row[5],
            ((Number) row[6]).intValue(),
            ((Number) row[7]).intValue(),
            ((Number) row[8]).intValue(),
            ((Number) row[9]).intValue()
        )).collect(Collectors.toList());
    }
}
