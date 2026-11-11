package com.example.backend.user;

import com.example.backend.user.User;
import com.example.backend.user.UserRole;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private final EntityManager em;

    public UserRepository(EntityManager em) {
        this.em = em;
    }

    /**
     * Persists a new user record (Fan, Admin, or Coach) to the database.
     */
    public User save(User user) {
        if (user.getId() == null) {
            em.persist(user);
            return user;
        } else {
            return em.merge(user);
        }
    }

    /**
     * Finds a user by their unique primary key ID.
     */
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(em.find(User.class, id));
    }

    /**
     * Finds a secure user account by their unique username.
     * Essential for the authentication login pipeline.
     */
    public Optional<User> findByUsername(String username) {
        try {
            User user = em.createQuery(
                    "SELECT u FROM User u LEFT JOIN FETCH u.club WHERE u.username = :username", User.class)
                    .setParameter("username", username)
                    .getSingleResult();
            return Optional.of(user);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }


    public Optional<User> findByEmail(String email) {
        try {
            User user = em.createQuery(
                    "SELECT u FROM User u WHERE u.email = :email", User.class)
                    .setParameter("email", email)
                    .getSingleResult();
            return Optional.of(user);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    /**
     * Lists all registered users belonging to a specific club profile.
     * Used by Club Admins to review their rostered officials, coaches, or players.
     */
    public List<User> findByClubId(Long clubId) {
        return em.createQuery(
                "SELECT u FROM User u WHERE u.club.id = :clubId ORDER BY u.username ASC", User.class)
                .setParameter("clubId", clubId)
                .getResultList();
    }

    /**
     * Securely updates a target user's role to COACH_MANAGER_PLAYER or back to
     * REGULAR_ACCESS.
     * 
     * Security constraints built into the update statement ensure:
     * 1. The acting administrator can only alter accounts inside their own club.
     * 2. The admin cannot overwrite or accidentally change a global DEV_ADMIN or
     * another CLUB_ADMIN.
     * 
     * @return count of rows updated (1 if successful, 0 if unauthorized or user not
     *         found)
     */
    public int executeSecureRoleToggle(Long targetUserId, Long adminClubId, UserRole newRole) {
        // Guardrail: Ensure the target role change is restricted to these two
        // application tiers
        if (newRole != UserRole.COACH_MANAGER_PLAYER && newRole != UserRole.REGULAR_USER) {
            throw new IllegalArgumentException("Unauthorized role target profile requested.");
        }

        return em
                .createQuery(
                        """
                                UPDATE User u
                                SET u.role = :newRole
                                WHERE u.id = :targetUserId
                                  AND u.club.id = :adminClubId
                                  AND u.role NOT IN (com.example.backend.user.UserRole.DEV_ADMIN, com.example.backend.user.UserRole.CLUB_ADMIN)
                                """)
                .setParameter("newRole", newRole)
                .setParameter("targetUserId", targetUserId)
                .setParameter("adminClubId", adminClubId)
                .executeUpdate();
    }

    /**
     * Removes a user profile completely (e.g., account deletion request).
     * Cascading deletes setup in PostgreSQL automatically wipe matching entries in
     * your favourites junction tables.
     */
    public void delete(User user) {
        em.remove(em.contains(user) ? user : em.merge(user));
    }
}
