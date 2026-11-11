// src/AppNavbar.tsx
import type { ComponentType } from "react";
import { AppShell, Divider, NavLink, ScrollArea, Text, Title } from "@mantine/core";
import {
  IconLogout,
  IconMap2,
  IconSettings,
  IconTrophy,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import { hasClubAccess, isClubStaff } from "../../auth/Roles";
import { useAuth } from "../../auth/auth-context";

export type Page = "home" | "my-club" | "clubs" | "players" | "competitions" | "settings";

type NavIcon = ComponentType<{ size?: number; stroke?: number }>;

interface AppNavbarProps {
  page: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

/** Goes inside <AppShell.Navbar>. Main links on top, Settings / Log out pinned to the bottom. */
export default function AppNavbar({ page, onNavigate, onLogout }: AppNavbarProps) {
  const { user } = useAuth();

  const mainItems: {
    page: Page;
    label: string;
    description?: string;
    icon: NavIcon;
  }[] = [
    { page: "home", label: "Home", description: "Browse Ireland", icon: IconMap2 },
    { page: "clubs", label: "Saved Clubs", icon: IconUsersGroup },
    { page: "players", label: "Saved Players", icon: IconUser },
    { page: "competitions", label: "Saved Competitions", icon: IconTrophy },
  ];

  return (
    <>
      <AppShell.Section grow component={ScrollArea}>
        {mainItems.map(({ page: target, label, description, icon: Icon }) => (
          <NavLink
            key={target}
            label={label}
            description={description}
            leftSection={<Icon size={18} stroke={1.5} />}
            active={page === target}
            variant="light"
            onClick={() => onNavigate(target)}
            style={{ borderRadius: "var(--mantine-radius-md)" }}
          />
        ))}
      </AppShell.Section>
      <AppShell.Section>
        <Divider my="sm" />
        {isClubStaff(user?.role) && user?.clubId && (
          <NavLink
            label="My Club"
            description="Club tools"
            leftSection={<IconUsersGroup size={18} stroke={1.5} />}
            active={page === "my-club"}
            variant="light"
            onClick={() => onNavigate("my-club")}
            style={{ borderRadius: "var(--mantine-radius-md)" }}
          />
        )}
      </AppShell.Section>
      <AppShell.Section>
        <Divider my="sm" />
        <NavLink
          label="Settings"
          leftSection={<IconSettings size={18} stroke={1.5} />}
          active={page === "settings"}
          variant="light"
          onClick={() => onNavigate("settings")}
          style={{ borderRadius: "var(--mantine-radius-md)" }}
        />
        <NavLink
          label="Log out"
          color="red"
          leftSection={<IconLogout size={18} stroke={1.5} />}
          onClick={onLogout}
          style={{ borderRadius: "var(--mantine-radius-md)" }}
        />
      </AppShell.Section>
    </>
  );
}

const TITLES: Record<Exclude<Page, "home">, string> = {
  "my-club": "My Club",
  clubs: "Saved Clubs",
  players: "Saved Players",
  competitions: "Saved Competitions",
  settings: "Settings",
};

/** Temporary content for every page except Home. */
export function PagePlaceholder({ page }: { page: Exclude<Page, "home"> }) {
  return (
    <>
      <Title order={2}>{TITLES[page]}</Title>
      <Text c="dimmed" mt="xs">
        Nothing here yet.
      </Text>
    </>
  );
}