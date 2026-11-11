// src/main.tsx  (REPLACES the earlier version: the whole app now sits behind login)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css"; // remove this line if App.tsx already imports it
import "./index.css";
import App from "./App";
import { ApiError } from "./auth/auth";
import AuthProvider from "./auth/AuthProvider";
import RequireAuth from "./auth/RequireAuth";
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // If any request comes back 401 (cookie expired or removed), forget the user.
    // RequireAuth then sends them to /login.
    onError: (error) => {
      if (error instanceof ApiError && error.status === 401) {
        queryClient.setQueryData(["me"], null);
      }
    },
  }),
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element with id 'root'");
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* the map, saved pages and settings: only reachable when signed in */}
              <Route
                path="/*"
                element={
                  <RequireAuth>
                    <App />
                  </RequireAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </MantineProvider>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </StrictMode>,
);
