package com.example.backend.club;

import java.util.List;
import java.util.Set;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/clubs/{clubId}/members")
public class ClubMemberController {

    private static final String CAN_ADMINISTER = "@clubAccess.canAdminister(#clubId, authentication)";
    private static final Set<String> GRANTABLE_ROLES = Set.of("COACH_MANAGER_PLAYER", "REGULAR_USER");

    public record MemberResponse(Long id, String username, String firstName, String lastName, String role) {}
    public record AddMemberRequest(String username) {}
    public record RoleRequest(String role) {}

    private final JdbcTemplate jdbc;

    public ClubMemberController(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    @GetMapping
    @PreAuthorize(CAN_ADMINISTER)
    public List<MemberResponse> list(@PathVariable Long clubId) {
        return jdbc.query(
                "SELECT id, username, first_name, last_name, role::text AS role "
                        + "FROM secure_users WHERE club_id = ? ORDER BY last_name, first_name",
                (rs, i) -> new MemberResponse(
                        rs.getLong("id"),
                        rs.getString("username"),
                        rs.getString("first_name"),
                        rs.getString("last_name"),
                        rs.getString("role")),
                clubId);
    }

    /** Attach an existing account that is not in any club yet. */
    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize(CAN_ADMINISTER)
    public void add(@PathVariable Long clubId, @RequestBody AddMemberRequest req) {
        if (req.username() == null || req.username().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "username is required");
        }
        int updated = jdbc.update(
                "UPDATE secure_users SET club_id = ? "
                        + "WHERE username = ? AND club_id IS NULL AND role = 'REGULAR_USER'",
                clubId, req.username().trim());
        if (updated == 0) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No user with that username who is free to join a club");
        }
    }

    /** Give or take away the coach role. */
    @PutMapping("/{userId}/role")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize(CAN_ADMINISTER)
    public void setRole(@PathVariable Long clubId, @PathVariable Long userId, @RequestBody RoleRequest req) {
        if (req.role() == null || !GRANTABLE_ROLES.contains(req.role())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "role must be one of " + GRANTABLE_ROLES);
        }
        int updated = jdbc.update(
                "UPDATE secure_users SET role = CAST(? AS user_role) "
                        + "WHERE id = ? AND club_id = ? AND role IN ('REGULAR_USER', 'COACH_MANAGER_PLAYER')",
                req.role(), userId, clubId);
        if (updated == 0) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Member not found in this club");
        }
    }

    /** Detach a member from the club (they go back to REGULAR_USER with no club). */
    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize(CAN_ADMINISTER)
    public void remove(@PathVariable Long clubId, @PathVariable Long userId) {
        int updated = jdbc.update(
                "UPDATE secure_users SET club_id = NULL, role = 'REGULAR_USER' "
                        + "WHERE id = ? AND club_id = ? AND role IN ('REGULAR_USER', 'COACH_MANAGER_PLAYER')",
                userId, clubId);
        if (updated == 0) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Member not found in this club");
        }
    }
}