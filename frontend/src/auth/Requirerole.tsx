import { Loader } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './auth-context'; // your existing auth context: { user, loading }
import type { UserRole } from './Roles';

/**
 * Use as a layout route. Everything nested inside is only reachable by the listed roles:
 *
 *   <Route element={<RequireRole roles={['CLUB_ADMIN', 'COACH_MANAGER_PLAYER']} />}>
 *     <Route path="/my-club/post-match" element={<PostMatchPage />} />
 *     <Route path="/my-club/players" element={<PlayersPage />} />
 *   </Route>
 *
 * This is only for a clean UI. The backend (@PreAuthorize) is what actually enforces access.
 */
export function RequireRole({ roles }: { roles: UserRole[] }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;                       // still checking the cookie via /api/auth/me
  if (!user) return <Navigate to="/login" replace />;   // not logged in
  if (!roles.includes(user.role)) return <Navigate to="/" replace />; // wrong role

  return <Outlet />;
}