import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fetchMe, loginUser, logoutUser, type LoginBody, type UserDto } from "./auth";
import type { UserRole } from "./Roles";

interface AuthContextValue {
  user: UserDto | null;
  loading: boolean;
  login: (body: LoginBody) => Promise<UserDto>;
  logout: () => Promise<void>;
}

export interface CurrentUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string; 
    role: UserRole;
    clubId: number | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchMe()
      .then((currentUser) => {
        if (active) setUser(currentUser);
      })
      .catch(() => {
        // If the session check cannot complete, render the signed-out state.
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      login: async (body) => {
        const signedInUser = await loginUser(body);
        setUser(signedInUser);
        return signedInUser;
      },
      logout: async () => {
        await logoutUser();
        setUser(null);
      },
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
