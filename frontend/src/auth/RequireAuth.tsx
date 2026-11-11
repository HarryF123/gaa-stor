import type { ReactNode } from "react";
import { Center, Loader } from "@mantine/core";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth-context";

interface RequireAuthProps {
  children: ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <Center mih="100vh">
        <Loader aria-label="Checking your sign-in status" />
      </Center>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
