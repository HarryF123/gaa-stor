import { useQuery } from "@tanstack/react-query";

// src/auth/api.ts  (REPLACES the earlier version: login is by username)
export type Role = "DEV_ADMIN" | "CLUB_ADMIN" | "COACH_MANAGER_PLAYER" | "REGULAR_USER";

export interface UserClubDto {
  id: number;
  name: string;
  county: string;
  pitch: string | null;
}

// Matches the backend UserResponse
export interface UserDto {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;          // ISO date, e.g. "1995-04-12"
  role: Role;
  clubId?: number | null;
  clubName?: string | null;
  club?: UserClubDto | null;     // null when the user has no club
}

// ADAPT: make this match your backend UserRegistrationRequest (note: no role, no clubId)
export interface RegisterBody {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string; // "YYYY-MM-DD"
  password: string;
}

export interface LoginBody {
  identifier: string;
  password: string;
}

/** Error from the API. fieldErrors is filled for 400/409 responses like { errors: { username: "..." } }. */
export class ApiError extends Error {
  status: number;
  fieldErrors: Record<string, string>;

  constructor(status: number, message: string, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

/** JSON fetch for same-origin calls (the auth cookie is sent automatically). */
export async function request<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  if (res.status === 204) return undefined as T;

  const body = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(
      res.status,
      body?.message ?? res.statusText ?? "Request failed",
      body?.errors ?? {},
    );
  }
  return body as T;
}

export const registerUser = (body: RegisterBody) =>
  request<UserDto>("/api/auth/register", { method: "POST", body: JSON.stringify(body) });

export const loginUser = (body: LoginBody) =>
  request<UserDto>("/api/auth/login", { method: "POST", body: JSON.stringify(body) });

export const logoutUser = () => request<void>("/api/auth/logout", { method: "POST" });

/** The signed-in user, or null when there is no valid cookie. */
export async function fetchMe(): Promise<UserDto | null> {
  try {
    return await request<UserDto>("/api/auth/me");
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) return null;
    throw e;
  }
}

// ---- Types (mirror the backend DTOs) -------------------------------------
export interface PlayerDto {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  jerseyNumber: number;
}

export interface MatchRecordDto {
  id: number;
  opponent: string;
  venue: string;
  playedAt: string;
  competitionName: string;
  outcome: 'WIN' | 'LOSS' | 'DRAW';
  scoredGoals: number;
  scoredPoints: number;
  concededGoals: number;
  concededPoints: number;
}

// ---- Data Synchronization Hooks -------------------------------------------

/** Fetch a club's squad list roster using your custom request utility */
export function useClubPlayers(clubId: number | undefined) {
  return useQuery<PlayerDto[], ApiError>({
    queryKey: ["club-players", clubId],
    // Cleanly pipes through the request wrapper, typing the payload array explicitly
    queryFn: () => request<PlayerDto[]>(`/api/clubs/${clubId}/players`),
    enabled: !!clubId,
  });
}

/** Fetch historical results and upcoming fixtures using your custom request utility */
export function useClubMatches(clubId: number | undefined) {
  return useQuery<MatchRecordDto[], ApiError>({
    queryKey: ["club-matches", clubId],
    // Cleanly pipes through the request wrapper, typing the payload array explicitly
    queryFn: () => request<MatchRecordDto[]>(`/api/clubs/${clubId}/matches`),
    enabled: !!clubId,
  });
}

export interface PlayerMatchStatInput {
  playerId: number;
  goals: number;
  twoPointers: number;
  standardPoints: number;
  yellowCards: number;
  redCards: number;
}

export interface NewGameSubmissionDto {
  clubId: number;
  competitionId: number;
  opponent: string;
  venue: string;
  playedAt: string; // ISO String
  outcome: 'WIN' | 'LOSS' | 'DRAW';
  teamGoals: number;
  teamTwoPointers: number;
  teamStandardPoints: number;
  opponentGoals: number;
  opponentTwoPointers: number;
  opponentStandardPoints: number;
  playerStats: PlayerMatchStatInput[];
}

// Add the client network fetch execution wrapper
export const submitNewGame = (body: NewGameSubmissionDto) =>
  request<void>("/api/clubs/games", { method: "POST", body: JSON.stringify(body) });

export interface CompetitionLookupDto {
  id: number;
  name: string;
  season: string;
}

/** Fetches active leagues/championships for the form dropdown */
export function useCompetitionsLookup() {
  return useQuery<CompetitionLookupDto[], ApiError>({
    queryKey: ["competitions-lookup"],
    queryFn: () => request<CompetitionLookupDto[]>("/api/competitions/lookup"),
  });
}


export interface CompetitionClubLookupDto {
  id: number;
  name: string;
}

export interface CountyVenueLookupDto {
  id: number;
  name: string; // Pitch Name
}

/** Fetches all other clubs registered in a specific competition */
export function useCompetitionTeams(competitionId: number | undefined, currentClubId: number) {
  return useQuery<CompetitionClubLookupDto[], ApiError>({
    queryKey: ["competition-teams", competitionId],
    queryFn: () => request<CompetitionClubLookupDto[]>(`/api/competitions/${competitionId}/teams`),
    enabled: !!competitionId,
    // Automatically filter out the current club from the opponent pool list!
    select: (teams) => teams.filter((t) => t.id !== currentClubId),
  });
}

// Inside your src/auth/api.ts file:

export function useCountyVenues(countyName: string | undefined) {
  return useQuery<CountyVenueLookupDto[], ApiError>({
    queryKey: ["county-venues", countyName],
    queryFn: async () => {
      // 🟢 FIXED: Added the missing /api/counties namespace prefix string block!
      const res = await fetch(`/api/counties/${encodeURIComponent(countyName || "")}/venues`);
      
      if (!res.ok) throw new Error("Failed to fetch county pitches data records");
      return res.json() as Promise<CountyVenueLookupDto[]>;
    },
    enabled: !!countyName,
  });
}

