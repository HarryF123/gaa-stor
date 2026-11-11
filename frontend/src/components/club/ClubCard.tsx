import { useState } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  CloseButton,
  Group,
  Loader,
  Paper,
  Stack,
  Table,
  Tabs,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconArrowsMaximize,
  IconCalendarOff,
  IconTrophy,
  IconUserOff,
} from "@tabler/icons-react";
import { useClubMatches, useClubPlayers } from "../../auth/auth";
import type { SelectedClub } from "./ClubPage";

interface ClubCardProps {
  club: SelectedClub | null;
  onClose: () => void;
  /** Enlarge button: App swaps this card for the full ClubPage */
  onExpand: () => void;
  /** Only passed when the logged-in user may record matches for this club */
  onRecordMatch?: () => void;
}

export default function ClubCard({
  club,
  onClose,
  onExpand,
  onRecordMatch,
}: ClubCardProps) {
  const isMobile = useMediaQuery("(max-width: 48em)");

  // Remember the last club so the content doesn't vanish while the card slides out
  const [displayed, setDisplayed] = useState<SelectedClub | null>(club);
  if (club !== null && club !== displayed) setDisplayed(club);

  const { data: players = [], isLoading: loadingPlayers } = useClubPlayers(
    displayed?.id,
  );
  const { data: matches = [], isLoading: loadingMatches } = useClubMatches(
    displayed?.id,
  );

  return (
    <Transition
      mounted={club !== null}
      transition={isMobile ? "slide-up" : "slide-down"}
      duration={200}
      timingFunction="ease"
    >
      {(transitionStyles) => (
        <Paper
          role="dialog"
          aria-label={displayed ? `${displayed.name} details` : "Club details"}
          withBorder
          shadow="lg"
          radius="xl"
          p="md"
          pos="absolute"
          top={isMobile ? "auto" : "25%"}
          left={isMobile ? 0 : "25%"}
          right={isMobile ? 0 : "auto"}
          bottom={isMobile ? 0 : "auto"}
          w={{ base: "auto", sm: 600 }}
          h={{ base: "auto", sm: 500 }}
          mah={{ base: "80%", sm: "calc(100% - 48px)" }}
          style={{
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            ...transitionStyles,
          }}
        >
          {displayed && (
            <>
              <Group
                justify="space-between"
                align="flex-start"
                wrap="nowrap"
                mb="md"
              >
                <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
                  <Title order={3} lh={1.2}>
                    {displayed.name}
                  </Title>
                  <Group gap="xs">
                    <Badge variant="light" size="lg">
                      {displayed.county}
                    </Badge>

                    {/* Only club staff of this club (and DEV_ADMIN) get this button */}
                    {onRecordMatch && (
                      <Button
                        size="compact-xs"
                        variant="light"
                        color="blue"
                        onClick={onRecordMatch}
                      >
                        Record Match Log
                      </Button>
                    )}
                  </Group>
                </Stack>

                <Group gap="xs" wrap="nowrap">
                  <ActionIcon
                    variant="default"
                    size="lg"
                    onClick={onExpand}
                    title="Open full club page"
                    aria-label="Open full club page"
                  >
                    <IconArrowsMaximize size={18} stroke={1.5} />
                  </ActionIcon>
                  <CloseButton
                    size="lg"
                    aria-label="Close club details"
                    onClick={onClose}
                  />
                </Group>
              </Group>

              <Tabs
                key={displayed.id}
                defaultValue="results"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <Tabs.List grow>
                  <Tabs.Tab value="results" style={{ fontSize: "16px" }}>
                    Results
                  </Tabs.Tab>
                  <Tabs.Tab value="fixtures" style={{ fontSize: "16px" }}>
                    Fixtures
                  </Tabs.Tab>
                  <Tabs.Tab value="players" style={{ fontSize: "16px" }}>
                    Players
                  </Tabs.Tab>
                </Tabs.List>

                <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
                  <Tabs.Panel value="results">
                    {loadingMatches ? (
                      <Group justify="center" py="md">
                        <Loader size="sm" />
                      </Group>
                    ) : matches.filter(
                        (m) => new Date(m.playedAt) <= new Date(),
                      ).length === 0 ? (
                      <Stack align="center" gap="xs" py="xl" c="dimmed">
                        <IconCalendarOff size={32} stroke={1.5} />
                        <Text size="sm">
                          No competitive match results recorded yet.
                        </Text>
                      </Stack>
                    ) : (
                      <Table verticalSpacing="sm" horizontalSpacing="md">
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th>Competition</Table.Th>
                            <Table.Th>Opponent</Table.Th>
                            <Table.Th>Score</Table.Th>
                            <Table.Th>Outcome</Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {matches
                            .filter((m) => new Date(m.playedAt) <= new Date())
                            .map((match) => (
                              <Table.Tr key={match.id}>
                                <Table.Td>
                                  <Text size="sm" fw={500}>
                                    {match.competitionName}
                                  </Text>
                                </Table.Td>
                                <Table.Td>
                                  <Text size="sm">{match.opponent}</Text>
                                </Table.Td>
                                <Table.Td>
                                  <Text size="sm" fw={600}>
                                    {match.scoredGoals}-{match.scoredPoints} vs{" "}
                                    {match.concededGoals}-{match.concededPoints}
                                  </Text>
                                </Table.Td>
                                <Table.Td>
                                  <Badge
                                    color={
                                      match.outcome === "WIN"
                                        ? "green"
                                        : match.outcome === "LOSS"
                                          ? "red"
                                          : "gray"
                                    }
                                  >
                                    {match.outcome}
                                  </Badge>
                                </Table.Td>
                              </Table.Tr>
                            ))}
                        </Table.Tbody>
                      </Table>
                    )}
                  </Tabs.Panel>

                  <Tabs.Panel value="fixtures">
                    {loadingMatches ? (
                      <Group justify="center" py="md">
                        <Loader size="sm" />
                      </Group>
                    ) : matches.filter((m) => new Date(m.playedAt) > new Date())
                        .length === 0 ? (
                      <Stack align="center" gap="xs" py="xl" c="dimmed">
                        <IconTrophy size={32} stroke={1.5} />
                        <Text size="sm">
                          No upcoming fixtures scheduled for this club.
                        </Text>
                      </Stack>
                    ) : (
                      <Table verticalSpacing="sm">
                        {/* Map matching fixture mapping structure here */}
                      </Table>
                    )}
                  </Tabs.Panel>

                  <Tabs.Panel value="players">
                    {loadingPlayers ? (
                      <Group justify="center" py="md">
                        <Loader size="sm" />
                      </Group>
                    ) : players.length === 0 ? (
                      <Stack align="center" gap="xs" py="xl" c="dimmed">
                        <IconUserOff size={32} stroke={1.5} />
                        <Text size="sm">
                          No registered player squad profiles found.
                        </Text>
                      </Stack>
                    ) : (
                      <Table
                        verticalSpacing="xs"
                        horizontalSpacing="md"
                        striped
                      >
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th style={{ width: 60 }}>No.</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Position</Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {[...players]
                            .sort((a, b) => a.jerseyNumber - b.jerseyNumber)
                            .map((player) => (
                              <Table.Tr key={player.id}>
                                <Table.Td>
                                  <Text fw={700} size="sm" c="blue">
                                    {player.jerseyNumber}
                                  </Text>
                                </Table.Td>
                                <Table.Td>
                                  <Text size="sm">
                                    {player.firstName} {player.lastName}
                                  </Text>
                                </Table.Td>
                                <Table.Td>
                                  <Badge variant="outline" size="sm">
                                    {player.position}
                                  </Badge>
                                </Table.Td>
                              </Table.Tr>
                            ))}
                        </Table.Tbody>
                      </Table>
                    )}
                  </Tabs.Panel>
                </div>
              </Tabs>
            </>
          )}
        </Paper>
      )}
    </Transition>
  );
}