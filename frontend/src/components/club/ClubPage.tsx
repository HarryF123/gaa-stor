import { useEffect, useState } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  CloseButton,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconUserOff,
} from "@tabler/icons-react";
import { useClubPlayers } from "../../auth/auth";

export interface SelectedClub {
  id: number;
  name: string;
  county: string;
  pitch?: string | null;
}

interface ClubPageProps {
  club: SelectedClub | null;
  onClose: () => void;
  /** Only passed when the logged-in user may record matches for this club */
  onRecordMatch?: () => void;
}

// ---- Layout tuning -------------------------------------------------------------------------
// Below this card width the panels stack in one column.
const TWO_COLUMN_MIN_WIDTH = 640;

// Wide layout: every track is an "fr" share of the card, so EVERY panel grows and shrinks
// with it (minimized page, expanded page, any window size).
//   info      | players     players
//   info      | matches     competitions
const WIDE_COLUMNS = "minmax(0, 5fr) minmax(0, 3.5fr) minmax(0, 3.5fr)";
const WIDE_ROWS = "minmax(160px, 3fr) minmax(110px, 2fr)"; // px = smallest a row may get
const WIDE_AREAS = `"info players players" "info matches competitions"`;

// Narrow layout: one column, panels stacked, the page scrolls.
const NARROW_AREAS = `"info" "players" "matches" "competitions"`;
// ---------------------------------------------------------------------------------------------

export default function ClubPage({
  club,
  onClose,
  onRecordMatch,
}: ClubPageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 48em)");

  // Measures the card's content area, so the layout follows the CARD size, not the window size
  const { ref: bodyRef, width: bodyWidth } = useElementSize();
  const wide = bodyWidth === 0 ? !isMobile : bodyWidth >= TWO_COLUMN_MIN_WIDTH;

  // Remember the last club so the content doesn't vanish while the card slides out
  const [displayed, setDisplayed] = useState<SelectedClub | null>(club);
  useEffect(() => {
    if (club !== null) setDisplayed(club);
  }, [club]);

  const { data: players = [], isLoading: loadingPlayers } = useClubPlayers(
    displayed?.id,
  );

  const handleClose = () => {
    setIsExpanded(false);
    onClose();
  };

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
          top={isMobile ? "auto" : isExpanded ? 0 : "10%"}
          left={isMobile ? 0 : isExpanded ? 0 : "10%"}
          right={isMobile ? 0 : isExpanded ? 0 : "10%"}
          bottom={isMobile ? 0 : isExpanded ? 0 : "10%"}
          w={isMobile || isExpanded ? "auto" : "80%"}
          h={isMobile || isExpanded ? "auto" : "80%"}
          mah={isMobile || isExpanded ? "100%" : "calc(100% - 48px)"}
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
              <Group justify="space-between" align="flex-start" mb="md" wrap="nowrap">
                <Stack gap={4} style={{ minWidth: 0 }}>
                  <Title order={3}>{displayed.name}</Title>
                  <Badge variant="light" size="lg" w="fit-content">
                    {displayed.county}
                  </Badge>
                </Stack>
                <Group gap="xs" wrap="nowrap">
                  {!isMobile && (
                    <ActionIcon
                      variant="default"
                      size="lg"
                      onClick={() => setIsExpanded((expanded) => !expanded)}
                      title={isExpanded ? "Minimize club details" : "Expand club details"}
                      aria-label={isExpanded ? "Minimize club details" : "Expand club details"}
                    >
                      {isExpanded ? (
                        <IconArrowsMinimize size={18} stroke={1.5} />
                      ) : (
                        <IconArrowsMaximize size={18} stroke={1.5} />
                      )}
                    </ActionIcon>
                  )}
                  {onRecordMatch && (
                    <Button size="compact-sm" variant="light" onClick={onRecordMatch}>
                      Record match
                    </Button>
                  )}
                  <CloseButton onClick={handleClose} aria-label="Close club details" />
                </Group>
              </Group>

              {/* Body: one CSS grid that fills the card. Every panel is a cell of it. */}
              <div
                ref={bodyRef}
                style={{
                  flex: 1,
                  minHeight: 0,
                  display: "grid",
                  gap: "var(--mantine-spacing-md)",
                  gridTemplateColumns: wide ? WIDE_COLUMNS : "minmax(0, 1fr)",
                  gridTemplateRows: wide ? WIDE_ROWS : "auto",
                  gridTemplateAreas: wide ? WIDE_AREAS : NARROW_AREAS,
                  overflowY: "auto",
                }}
              >
                {/* Club information */}
                <Paper
                  withBorder
                  radius="md"
                  p="lg"
                  style={{ gridArea: "info", minHeight: 0, overflow: "auto" }}
                >
                  <Stack gap="md">
                    <Title order={4}>Club information</Title>
                    <div>
                      <Text size="sm" c="dimmed">Club</Text>
                      <Text fw={600}>{displayed.name}</Text>
                    </div>
                    <div>
                      <Text size="sm" c="dimmed">County</Text>
                      <Text fw={600}>{displayed.county}</Text>
                    </div>
                    <div>
                      <Text size="sm" c="dimmed">Home pitch</Text>
                      <Text fw={600}>{displayed.pitch || "Not provided"}</Text>
                    </div>
                  </Stack>
                </Paper>

                {/* Players: the list scrolls inside its cell */}
                <Paper
                  withBorder
                  radius="md"
                  p="md"
                  style={{
                    gridArea: "players",
                    minHeight: 0,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Group justify="space-between" mb="sm">
                    <Title order={4}>Players</Title>
                    <Badge variant="light">{players.length}</Badge>
                  </Group>
                  {loadingPlayers ? (
                    <Group justify="center" py="xl"><Loader size="sm" /></Group>
                  ) : players.length === 0 ? (
                    <Stack align="center" gap="xs" py="lg">
                      <IconUserOff size={24} />
                      <Text c="dimmed" size="sm">No players registered yet.</Text>
                    </Stack>
                  ) : (
                    <Stack
                      gap={0}
                      style={{
                        flex: 1,
                        minHeight: 0,
                        overflowY: "auto",
                        maxHeight: wide ? undefined : 320,
                      }}
                    >
                      {players.map((player) => (
                        <Group
                          key={player.id}
                          justify="space-between"
                          py="xs"
                          wrap="nowrap"
                          style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
                        >
                          <Text size="sm" fw={500} truncate>
                            {player.firstName} {player.lastName}
                          </Text>
                          <Group gap="xs" wrap="nowrap">
                            <Text size="xs" c="dimmed">{player.position}</Text>
                            <Badge size="sm" variant="light">{player.jerseyNumber}</Badge>
                          </Group>
                        </Group>
                      ))}
                    </Stack>
                  )}
                </Paper>

                {/* Recent matches */}
                <Paper
                  withBorder
                  radius="md"
                  p="md"
                  style={{ gridArea: "matches", minHeight: wide ? 0 : 110, overflow: "auto" }}
                >
                  <Title order={5} mb="sm">Recent matches</Title>
                  <Text size="sm" c="dimmed">Match information will appear here.</Text>
                </Paper>

                {/* Competitions */}
                <Paper
                  withBorder
                  radius="md"
                  p="md"
                  style={{ gridArea: "competitions", minHeight: wide ? 0 : 110, overflow: "auto" }}
                >
                  <Title order={5} mb="sm">Competitions</Title>
                  <Text size="sm" c="dimmed">Competition information will appear here.</Text>
                </Paper>
              </div>
            </>
          )}
        </Paper>
      )}
    </Transition>
  );
}