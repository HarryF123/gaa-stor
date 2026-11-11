package com.example.backend.user;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.example.backend.club.Club;
import com.example.backend.player.Player;
import com.example.backend.competition.Competition;

@Entity
@Table(name = "secure_users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(unique = true, nullable = false, length = 255)
    private String email;

    @Column(name = "password_hash", nullable = false, length = 60)
    private String passwordHash;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    // Maps the Enum as a String in the database
    @Enumerated(EnumType.STRING)
    @JdbcTypeCode(SqlTypes.NAMED_ENUM)
    @Column(nullable = false)
    private UserRole role;

    // The club this official/coach belongs to (null for fans/devs)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "club_id")
    private Club club;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    // --- FAVOURITES MANY-TO-MANY RELATIONSHIPS ---

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_favourite_clubs", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "club_id"))
    private Set<Club> favouriteClubs = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_favourite_players", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "player_id"))
    private Set<Player> favouritePlayers = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_favourite_competitions", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "competition_id"))
    private Set<Competition> favouriteCompetitions = new HashSet<>();

    // Standard no-arg constructor
    public User() {
    }

    public User(String username, String firstName, String lastName, String email, String passwordHash, LocalDate dateOfBirth) {
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName; // Default value
        this.lastName = lastName;  // Default value
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Set<Club> getFavouriteClubs() {
        return favouriteClubs;
    }

    public void setFavouriteClubs(Set<Club> favouriteClubs) {
        this.favouriteClubs = favouriteClubs;
    }

    public Set<Player> getFavouritePlayers() {
        return favouritePlayers;
    }

    public void setFavouritePlayers(Set<Player> favouritePlayers) {
        this.favouritePlayers = favouritePlayers;
    }

    public Set<Competition> getFavouriteCompetitions() {
        return favouriteCompetitions;
    }

    public void setFavouriteCompetitions(Set<Competition> favouriteCompetitions) {
        this.favouriteCompetitions = favouriteCompetitions;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
