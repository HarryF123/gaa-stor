package com.example.backend.player;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.example.backend.club.Club;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many players belong to one club. 
    // FetchType.LAZY prevents loading the whole club record unless you explicitly ask for it.
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "club_id", nullable = false)
    private Club club;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(length = 50)
    private String position;

    // Maps to SMALLINT in your PostgreSQL database
    @Column(name = "jersey_number")
    private Short jerseyNumber;

    @Column(nullable = false)
    private boolean active = true;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    // Standard no-arg constructor required by JPA
    public Player() {}

    // Convenience constructor for creating a new player profile
    public Player(Club club, String firstName, String lastName, LocalDate dateOfBirth, String position, Short jerseyNumber) {
        this.club = club;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.position = position;
        setJerseyNumber(jerseyNumber); // Enforce checking through setter logic
    }

    // --- GETTERS AND SETTERS ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Club getClub() { return club; }
    public void setClub(Club club) { this.club = club; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public Short getJerseyNumber() { return jerseyNumber; }
    
    // Application-side replication of your database's 'players_jersey_number_check' constraint
    public void setJerseyNumber(Short jerseyNumber) {
        if (jerseyNumber != null && (jerseyNumber < 1 || jerseyNumber > 99)) {
            throw new IllegalArgumentException("GAA Jersey number must be between 1 and 99.");
        }
        this.jerseyNumber = jerseyNumber;
    }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}
