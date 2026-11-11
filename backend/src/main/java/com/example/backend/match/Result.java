package com.example.backend.match;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import com.example.backend.club.Club;
import com.example.backend.competition.Competition;

@Entity
@Table(name = "results")
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "club_id", nullable = false)
    private Club club;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competition_id")
    private Competition competition;

    @OneToOne(mappedBy = "result", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Scored scores;

    @OneToOne(mappedBy = "result", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Conceded conceded;

    @Column(nullable = false, length = 150)
    private String opponent;

    @Column(length = 150)
    private String venue;

    @Column(name = "played_at", nullable = false)
    private LocalDateTime playedAt;

    // Legacy or backup string column from your schema
    @Column(length = 150)
    private String competitionName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private MatchOutcome outcome;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public Result() {
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public Competition getCompetition() {
        return competition;
    }

    public void setCompetition(Competition competition) {
        this.competition = competition;
    }

    public String getOpponent() {
        return opponent;
    }

    public void setOpponent(String opponent) {
        this.opponent = opponent;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public LocalDateTime getPlayedAt() {
        return playedAt;
    }

    public void setPlayedAt(LocalDateTime playedAt) {
        this.playedAt = playedAt;
    }

    public String getCompetitionName() {
        return competitionName;
    }

    public void setCompetitionName(String competitionName) {
        this.competitionName = competitionName;
    }

    public MatchOutcome getOutcome() {
        return outcome;
    }

    public void setOutcome(MatchOutcome outcome) {
        this.outcome = outcome;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
