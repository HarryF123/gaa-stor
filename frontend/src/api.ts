import { keepPreviousData, useQuery } from "@tanstack/react-query";

// ---- Types (mirror the backend DTOs) -------------------------------------
export interface CountyDto {
  name: string;
  province: string | null;
  country: string | null;
  stadium: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  tertiaryColor: string | null;
  center: [number, number]; // [lng, lat]
  zoom: number;
}

export interface PitchMarkerDto {
  id: number; // pitch id - unique per marker
  clubId: number;
  club: string;
  county: string;
  pitch: string | null;
  lat: number;
  lng: number;
}

export interface ClubSearchDto {
  id: number;
  name: string;
  county: string;
  pitches: { id: number; name: string | null; lat: number; lng: number }[];
}

// ---- Fetch helper ----------------------------------------------------------
async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json() as Promise<T>;
}

// ---- Hooks -----------------------------------------------------------------
// Defined at module level so the reference is stable between renders
const byName = (list: CountyDto[]) =>
  Object.fromEntries(list.map((c) => [c.name, c])) as Record<string, CountyDto>;

/** All 32 counties keyed by name - the same shape as the old gaaCounties object. */
export function useCounties() {
  return useQuery({
    queryKey: ["counties"],
    queryFn: () => getJson<CountyDto[]>("/api/counties"),
    staleTime: Infinity,
    select: byName,
  });
}

/** Pitch markers for the clicked county (does nothing while county is null). */
export function usePitches(county: string | null) {
  return useQuery({
    queryKey: ["pitches", county],
    queryFn: () =>
      getJson<PitchMarkerDto[]>(
        `/api/counties/${encodeURIComponent(county as string)}/pitches`,
      ),
    enabled: !!county,
    staleTime: 5 * 60_000,
  });
}

/** Club search for the autocomplete (waits for at least 2 characters). */
export function useClubSearch(term: string) {
  const q = term.trim();
  return useQuery({
    queryKey: ["club-search", q],
    queryFn: () => getJson<ClubSearchDto[]>(`/api/clubs?search=${encodeURIComponent(q)}`),
    enabled: q.length >= 2,
    placeholderData: keepPreviousData,
  });
}
