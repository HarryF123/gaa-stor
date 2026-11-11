package com.example.backend.competition;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.example.backend.club.Club;
import com.example.backend.geo.County;
import com.example.backend.match.Result;

@Entity
@Table(name = "competitions")
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "county_id", nullable = false)
    private County county;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(length = 20)
    private String season;

    // Maps the new PostgreSQL Enum as a String
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.NAMED_ENUM)
    @Column(nullable = false)
    private CompetitionType type = CompetitionType.GROUP_KNOCKOUT;

    // Maps the new current stage Enum
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.NAMED_ENUM)
    @Column(name = "current_stage", nullable = false)
    private CompetitionStage currentStage = CompetitionStage.NOT_STARTED;

    // --- RELATIONSHIPS ---

    // Linked to your existing 'club_competitions' table mapping
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "club_competitions",
        joinColumns = @JoinColumn(name = "competition_id"),
        inverseJoinColumns = @JoinColumn(name = "club_id")
    )
    private Set<Club> participatingClubs = new HashSet<>();

    // One-to-Many backlink to your existing 'results' table mapping
    @OneToMany(mappedBy = "competition", fetch = FetchType.LAZY)
    @OrderBy("playedAt DESC")
    private List<Result> results = new ArrayList<>();

    // New relationship tracking historical entries
    @OneToMany(mappedBy = "competition", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderBy("year DESC")
    private List<HistoricalWinner> previousWinners = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public County getCounty() {
        return county;
    }

    public void setCounty(County county) {
        this.county = county;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public CompetitionType getType() {
        return type;
    }

    public void setType(CompetitionType type) {
        this.type = type;
    }

    public CompetitionStage getCurrentStage() {
        return currentStage;
    }

    public void setCurrentStage(CompetitionStage currentStage) {
        this.currentStage = currentStage;
    }

    public Set<Club> getParticipatingClubs() {
        return participatingClubs;
    }

    public void setParticipatingClubs(Set<Club> participatingClubs) {
        this.participatingClubs = participatingClubs;
    }

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public List<HistoricalWinner> getPreviousWinners() {
        return previousWinners;
    }

    public void setPreviousWinners(List<HistoricalWinner> previousWinners) {
        this.previousWinners = previousWinners;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
