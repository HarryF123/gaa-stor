export type UserRole =
  | 'DEV_ADMIN'
  | 'CLUB_ADMIN'
  | 'COACH_MANAGER_PLAYER'
  | 'REGULAR_USER';

// Roles that get the "My Club" area (post matches, manage players)
export const CLUB_STAFF: UserRole[] = ['CLUB_ADMIN', 'COACH_MANAGER_PLAYER'];

export const isClubStaff = (role?: UserRole): boolean =>
  !!role && CLUB_STAFF.includes(role);

export const hasClubAccess = (
  user?: { role?: UserRole; clubId?: number | null } | null,
): boolean => !!user && !!user.clubId && isClubStaff(user.role);

// Only club admins can manage members and give the coach role
export const isClubAdmin = (role?: UserRole): boolean => role === 'CLUB_ADMIN';