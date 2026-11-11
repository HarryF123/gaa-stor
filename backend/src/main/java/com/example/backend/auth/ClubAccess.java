package com.example.backend.auth;

import java.util.Set;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

/**
 * Per-club permission checks, used from @PreAuthorize("@clubAccess.canManage(#clubId, authentication)").
 *
 * The JWT only carries the user id, email and role, so the role and club are read from
 * secure_users on each guarded request (one primary-key lookup). That means a demotion or a
 * change of club takes effect immediately, instead of when the 8-hour token expires.
 *
 * ASSUMPTION: AuthUser is a record with an id() accessor. If it is a class, change user.id() to user.getId().
 */
@Component("clubAccess")
public class ClubAccess {

    private static final Set<String> MANAGE_ROLES =
            Set.of("DEV_ADMIN", "CLUB_ADMIN", "COACH_MANAGER_PLAYER");
    private static final Set<String> ADMIN_ROLES =
            Set.of("DEV_ADMIN", "CLUB_ADMIN");

    private final JdbcTemplate jdbc;

    public ClubAccess(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    /** Post matches, add / remove players: CLUB_ADMIN or COACH_MANAGER_PLAYER of that club, or DEV_ADMIN. */
    public boolean canManage(Long clubId, Authentication auth) {
        return check(clubId, auth, MANAGE_ROLES);
    }

    /** Members and role changes: CLUB_ADMIN of that club, or DEV_ADMIN. */
    public boolean canAdminister(Long clubId, Authentication auth) {
        return check(clubId, auth, ADMIN_ROLES);
    }

    private boolean check(Long clubId, Authentication auth, Set<String> allowedRoles) {
        if (clubId == null || auth == null || !(auth.getPrincipal() instanceof AuthUser user)) {
            return false;
        }
        Boolean allowed = jdbc.query(
                "SELECT role::text, club_id FROM secure_users WHERE id = ?",
                (ResultSetExtractor<Boolean>) rs -> {
                    if (!rs.next()) {
                        return false;
                    }
                    String role = rs.getString(1);
                    long userClubId = rs.getLong(2);
                    boolean hasClub = !rs.wasNull();
                    if (!allowedRoles.contains(role)) {
                        return false;
                    }
                    if ("DEV_ADMIN".equals(role)) {
                        return true;
                    }
                    return hasClub && userClubId == clubId;
                },
                user.id());
        return Boolean.TRUE.equals(allowed);
    }
}