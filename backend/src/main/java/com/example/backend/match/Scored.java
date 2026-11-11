package com.example.backend.match;

import jakarta.persistence.*;
import org.hibernate.annotations.Generated;
import org.hibernate.generator.EventType;

@Entity
@Table(name = "scores")
public class Scored {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "result_id", nullable = false, unique = true)
    private Result result;

    @Column(nullable = false)
    private short goals = 0;

    @Column(name = "two_pointers", nullable = false)
    private short twoPointers = 0;

    @Column(name = "standard_points", nullable = false)
    private short standardPoints = 0;

    // Automatically recalculates matching the database change
    @Generated(event = {EventType.INSERT, EventType.UPDATE})
    @Column(name = "total", insertable = false, updatable = false)
    private int total;

    public Scored() {}

    public Scored(Result result, short goals, short twoPointers, short standardPoints) {
        this.result = result;
        setGoals(goals);
        setTwoPointers(twoPointers);
        setStandardPoints(standardPoints);
    }

    // --- GETTERS AND SETTERS ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Result getResult() { return result; }
    public void setResult(Result result) { this.result = result; }

    public short getGoals() { return goals; }
    public void setGoals(short goals) { this.goals = goals; }

    public short getTwoPointers() { return twoPointers; }
    public void setTwoPointers(short twoPointers) { this.twoPointers = twoPointers; }

    public short getStandardPoints() { return standardPoints; }
    public void setStandardPoints(short standardPoints) { this.standardPoints = standardPoints; }

    public int getTotal() { return total; }
}
