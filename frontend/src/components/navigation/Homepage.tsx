import { useAuth } from '../../auth/auth-context'; // your existing auth context: { user, loading }
import { isClubStaff } from '../../auth/Roles';

// Placeholders: FanHome is your current home screen, the other two are new.
import { FanHome } from './FanHome';
import { ClubHome } from './ClubHome';
import { AdminHome } from './AdminHome';

/**
 * One route ("/") that shows a different home screen per role.
 * The role comes from the logged-in user (/api/auth/me), so the screen changes as soon as
 * the auth state changes, with no page reload.
 */
export function HomePage() {
  const { user } = useAuth();

  if (user?.role === 'DEV_ADMIN') return <AdminHome />;

  // Club staff with a club attached get their club dashboard. Without a club_id there is
  // nothing to show yet, so they fall back to the normal home.
  if (isClubStaff(user?.role) && user?.clubId) return <ClubHome clubId={user.clubId} />;

  return <FanHome />; // REGULAR_USER and logged-out visitors
}