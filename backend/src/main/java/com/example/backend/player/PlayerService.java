package com.example.backend.player;

import jakarta.persistence.EntityManager;
import java.time.LocalDate;
import com.example.backend.club.Club;
import com.example.backend.user.User;
import com.example.backend.user.UserRole;

public class PlayerService {

    public void addPlayerToRoster(EntityManager em, Long adminUserId, String firstName, String lastName, LocalDate dob, String position, Short jerseyNumber) {
        try {
            em.getTransaction().begin();

            // 1. Fetch and authenticate the logged-in administrator
            User admin = em.find(User.class, adminUserId);
            if (admin == null || admin.getRole() != com.example.backend.user.UserRole.CLUB_ADMIN) {
                throw new SecurityException("Access Denied: Only a Club Admin can register players.");
            }

            // 2. Multi-tenancy Isolation Check: Grab the exact club context assigned to this Admin
            Club adminClub = admin.getClub();
            if (adminClub == null) {
                throw new IllegalStateException("Admin profile configuration error: No assigned club found.");
            }

            // 3. Construct and save the new Player record mapped to that precise club
            Player newPlayer = new Player(adminClub, firstName, lastName, dob, position, jerseyNumber);
            em.persist(newPlayer);

            em.getTransaction().commit();
        } catch (Exception e) {
            if (em.getTransaction().isActive()) em.getTransaction().rollback();
            throw e;
        }
    }
}
