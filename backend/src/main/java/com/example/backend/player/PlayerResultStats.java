package com.example.backend.player;

import jakarta.persistence.*;
import com.example.backend.match.Result;

@Entity
@Table(name = "player_result_stats", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"player_id", "result_id"})
})
public class PlayerResultStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "result_id", nullable = false)
    private Result result;

    @Column(nullable = false)
    private short goals = 0;

    @Column(name = "two_pointers", nullable = false)
    private short twoPointers = 0;

    @Column(name = "standard_points", nullable = false)
    private short standardPoints = 0;

    @Column(name = "conceded_goals", nullable = false)
    private short concededGoals = 0;

    @Column(name = "conceded_points", nullable = false)
    private short concededPoints = 0;

    @Column(name = "yellow_cards", nullable = false)
    private short yellowCards = 0;

    @Column(name = "red_cards", nullable = false)
    private short redCards = 0;

    public PlayerResultStats() {}

    public PlayerResultStats(Player player, Result result, short goals, short twoPointers, short standardPoints) {
        this.player = player;
        this.result = result;
        this.goals = goals;
        this.twoPointers = twoPointers;
        this.standardPoints = standardPoints;
    }

    // --- Dynamic Utility Method ---
    public int getMatchTotalScored() {
        return (this.goals * 3) + (this.twoPointers * 2) + this.standardPoints;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public short getGoals() {
        return goals;
    }

    public void setGoals(short goals) {
        this.goals = goals;
    }

    public short getTwoPointers() {
        return twoPointers;
    }

    public void setTwoPointers(short twoPointers) {
        this.twoPointers = twoPointers;
    }

    public short getStandardPoints() {
        return standardPoints;
    }

    public void setStandardPoints(short standardPoints) {
        this.standardPoints = standardPoints;
    }

    public short getConcededGoals() {
        return concededGoals;
    }

    public void setConcededGoals(short concededGoals) {
        this.concededGoals = concededGoals;
    }

    public short getConcededPoints() {
        return concededPoints;
    }

    public void setConcededPoints(short concededPoints) {
        this.concededPoints = concededPoints;
    }

    public short getYellowCards() {
        return yellowCards;
    }

    public void setYellowCards(short yellowCards) {
        this.yellowCards = yellowCards;
    }

    public short getRedCards() {
        return redCards;
    }

    public void setRedCards(short redCards) {
        this.redCards = redCards;
    }
}
