import { useMemo, useState } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import {
  Alert,
  Button,
  Divider,
  Group,
  NumberInput,
  Paper,
  Select,
  Stack,
  Stepper,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { usePitches } from "../api"; // same /api/counties/{name}/pitches endpoint the map uses
import {
  submitNewGame,
  useClubPlayers,
  useCompetitionTeams,
} from "../auth/auth.ts"; // useCountyVenues is no longer needed: it called /venues, which doesn't exist

interface AddGameFormProps {
  clubId: number;
  clubName: string;
  /** county is optional; when given it is used instead of guessing from the first word of the label */
  competitionsList: { value: string; label: string; county?: string }[];
  onSuccess: () => void;
}

interface PlayerStatRow {
  playerId: number;
  name: string;
  goals: number;
  twoPointers: number;
  standardPoints: number;
  yellowCards: number;
  redCards: number;
}

type Outcome = "WIN" | "DRAW" | "LOSS";

/** GAA football board total: goal = 3, two-pointer = 2, point = 1 */
const boardTotal = (goals: number | string, twoPointers: number | string, points: number | string) =>
  Number(goals) * 3 + Number(twoPointers) * 2 + Number(points);

function outcomeFromScore(v: {
  teamGoals: number | string;
  teamTwoPointers: number | string;
  teamStandardPoints: number | string;
  opponentGoals: number | string;
  opponentTwoPointers: number | string;
  opponentStandardPoints: number | string;
}): Outcome {
  const team = boardTotal(v.teamGoals, v.teamTwoPointers, v.teamStandardPoints);
  const opp = boardTotal(v.opponentGoals, v.opponentTwoPointers, v.opponentStandardPoints);
  return team > opp ? "WIN" : team < opp ? "LOSS" : "DRAW";
}

/** "YYYY-MM-DDTHH:mm" in LOCAL time, which is what <input type="datetime-local"> expects */
function nowForDateTimeLocal() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

/** Mantine throws if two options share a value, so drop repeats and say which list had them. */
function uniqueByValue<T extends { value: string }>(items: T[], listName: string): T[] {
  const seen = new Set<string>();
  const unique = items.filter((item) => {
    if (seen.has(item.value)) return false;
    seen.add(item.value);
    return true;
  });
  if (unique.length !== items.length) {
    console.warn(
      `[AddGameForm] ${listName}: ${items.length - unique.length} duplicate option(s) removed. ` +
        `The data source is returning the same id more than once.`,
    );
  }
  return unique;
}

export default function AddGameForm({
  clubId,
  clubName,
  competitionsList,
  onSuccess,
}: AddGameFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { data: players = [] } = useClubPlayers(clubId);

  const form = useForm({
    initialValues: {
      competitionId: "",
      opponentId: "",
      venue: "", // holds the PITCH ID as a string
      playedAt: nowForDateTimeLocal(),
      outcome: "WIN",
      teamGoals: 0,
      teamTwoPointers: 0,
      teamStandardPoints: 0,
      opponentGoals: 0,
      opponentTwoPointers: 0,
      opponentStandardPoints: 0,
      playerStats: [] as PlayerStatRow[],
    },
    validate: {
      competitionId: isNotEmpty("Select competition"),
      opponentId: isNotEmpty("Select opponent team"),
      venue: isNotEmpty("Select match venue"),
      // stops the outcome and the score from contradicting each other
      outcome: (value, values) => {
        const fromScore = outcomeFromScore(values);
        return value === fromScore ? null : `The score above is a ${fromScore}`;
      },
    },
  });

  // Competition dropdown options (plain { value, label } for Mantine)
  const competitionOptions = useMemo(
    () =>
      uniqueByValue(
        competitionsList.map(({ value, label }) => ({ value, label })),
        "competitions",
      ),
    [competitionsList],
  );

  // 1. County of the selected competition: explicit field first, first word of the label as a fallback
  const selectedCompCounty = useMemo(() => {
    const active = competitionsList.find((c) => c.value === form.values.competitionId);
    if (!active) return undefined;
    return active.county ?? active.label.split(" ")[0];
  }, [form.values.competitionId, competitionsList]);

  // 2. Opponents in the chosen competition
  const { data: opponentTeams = [], isLoading: loadingTeams } = useCompetitionTeams(
    form.values.competitionId ? parseInt(form.values.competitionId) : undefined,
    clubId,
  );

  // 3. Venues = the pitches of that county (same endpoint as the map)
  const {
    data: countyVenues = [],
    isLoading: loadingVenues,
    isError: venuesFailed,
  } = usePitches(selectedCompCounty ?? null);

  const opponentDropdownData = useMemo(
    () =>
      uniqueByValue(
        opponentTeams.map((t) => ({ value: String(t.id), label: t.name })),
        "opponents",
      ),
    [opponentTeams],
  );

  // The value is the pitch id: always present and unique (pitch NAMES can be null or repeated)
  const venueDropdownData = useMemo(
    () =>
      uniqueByValue(
        countyVenues.map((v) => ({
          value: String(v.id),
          label: v.pitch ? `${v.pitch} (${v.club})` : `${v.club} ground`,
        })),
        "venues",
      ),
    [countyVenues],
  );

  const initializeSquadStatsStep = () => {
    if (form.values.playerStats.length === 0) {
      const initialStats: PlayerStatRow[] = players.map((p) => ({
        playerId: p.id,
        name: `${p.firstName} ${p.lastName}`,
        goals: 0,
        twoPointers: 0,
        standardPoints: 0,
        yellowCards: 0,
        redCards: 0,
      }));
      form.setFieldValue("playerStats", initialStats);
    }
    setActiveStep(1);
  };

  const handleFinalSubmit = async (values: typeof form.values) => {
    const chosenOpponent = opponentDropdownData.find((o) => o.value === values.opponentId);
    // turn the selected pitch id back into the name the results table stores
    const chosenVenue = countyVenues.find((v) => String(v.id) === values.venue);

    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitNewGame({
        clubId,
        competitionId: parseInt(values.competitionId),
        opponent: chosenOpponent?.label || "",
        venue: chosenVenue?.pitch ?? chosenVenue?.club ?? "",
        playedAt: new Date(values.playedAt).toISOString(),
        outcome: values.outcome as Outcome,
        teamGoals: values.teamGoals,
        teamTwoPointers: values.teamTwoPointers,
        teamStandardPoints: values.teamStandardPoints,
        opponentGoals: values.opponentGoals,
        opponentTwoPointers: values.opponentTwoPointers,
        opponentStandardPoints: values.opponentStandardPoints,
        playerStats: values.playerStats,
      });
      onSuccess();
      form.reset();
      setActiveStep(0);
    } catch (err) {
      console.error(err);
      setSubmitError(err instanceof Error ? err.message : "Couldn't save the match log. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper p="md">
      <Title order={3} mb="xs">
        Match Log from perspective of:{" "}
        <span style={{ color: "var(--mantine-color-blue-filled)" }}>{clubName}</span>
      </Title>
      <Divider my="md" />

      {/* Clicking is only allowed backwards: going forward must pass the form's validation */}
      <Stepper
        active={activeStep}
        onStepClick={(step) => {
          if (step < activeStep) setActiveStep(step);
        }}
      >
        <Stepper.Step label="Match Details">
          <form onSubmit={form.onSubmit(initializeSquadStatsStep)}>
            <Stack mt="md">
              <Select
                label="Competition"
                data={competitionOptions}
                {...form.getInputProps("competitionId")}
                // a new competition means a different set of opponents and venues, so clear them
                onChange={(value) => {
                  form.setFieldValue("competitionId", value ?? "");
                  form.setFieldValue("opponentId", "");
                  form.setFieldValue("venue", "");
                }}
                required
              />

              <Select
                label="Opponent"
                placeholder={
                  form.values.competitionId
                    ? "Select opponent..."
                    : "Please choose a competition first"
                }
                data={opponentDropdownData}
                disabled={!form.values.competitionId}
                loading={loadingTeams}
                searchable
                nothingFoundMessage="No registered opponent clubs found"
                {...form.getInputProps("opponentId")}
                required
              />

              <Select
                label="Venue"
                placeholder={
                  form.values.competitionId
                    ? "Select pitch..."
                    : "Please choose a competition first"
                }
                data={venueDropdownData}
                disabled={!form.values.competitionId}
                loading={loadingVenues}
                searchable
                nothingFoundMessage="No pitches registered in this county"
                {...form.getInputProps("venue")}
                error={venuesFailed ? "Couldn't load venues" : form.errors.venue}
                required
              />

              <TextInput
                label="Date & Time"
                type="datetime-local"
                {...form.getInputProps("playedAt")}
                required
              />

              <Divider label="Full-Time Board Result" labelPosition="center" my="md" />
              <Select
                label="Outcome"
                data={["WIN", "LOSS", "DRAW"]}
                {...form.getInputProps("outcome")}
              />

              <Group grow>
                <NumberInput
                  label={`${clubName} Goals`}
                  min={0}
                  {...form.getInputProps("teamGoals")}
                />
                <NumberInput
                  label={`${clubName} 2-Pointers`}
                  min={0}
                  {...form.getInputProps("teamTwoPointers")}
                />
                <NumberInput
                  label={`${clubName} Points`}
                  min={0}
                  {...form.getInputProps("teamStandardPoints")}
                />
              </Group>
              <Group grow>
                <NumberInput
                  label="Opponent Goals"
                  min={0}
                  {...form.getInputProps("opponentGoals")}
                />
                <NumberInput
                  label="Opponent 2-Pointers"
                  min={0}
                  {...form.getInputProps("opponentTwoPointers")}
                />
                <NumberInput
                  label="Opponent Points"
                  min={0}
                  {...form.getInputProps("opponentStandardPoints")}
                />
              </Group>
              <Text size="xs" c="dimmed">
                Board total: {boardTotal(form.values.teamGoals, form.values.teamTwoPointers, form.values.teamStandardPoints)}
                {" – "}
                {boardTotal(form.values.opponentGoals, form.values.opponentTwoPointers, form.values.opponentStandardPoints)}
                {" "}(goal = 3, two-pointer = 2, point = 1)
              </Text>

              <Button type="submit" mt="md">
                Next: Line Out Details
              </Button>
            </Stack>
          </form>
        </Stepper.Step>

        {/* STEP 2: INDIVIDUAL SQUAD PERFORMANCE STATS */}
        <Stepper.Step label="Squad Performance" description="Line out & scorers">
          <Table verticalSpacing="xs" mt="md" striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Player Name</Table.Th>
                <Table.Th>Goals</Table.Th>
                <Table.Th>2-Pts</Table.Th>
                <Table.Th>Points</Table.Th>
                <Table.Th>Cards</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {form.values.playerStats.map((item, index) => (
                <Table.Tr key={item.playerId}>
                  <Table.Td fw={500}>{item.name}</Table.Td>
                  <Table.Td>
                    <NumberInput
                      style={{ width: 60 }}
                      min={0}
                      {...form.getInputProps(`playerStats.${index}.goals`)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      style={{ width: 60 }}
                      min={0}
                      {...form.getInputProps(`playerStats.${index}.twoPointers`)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      style={{ width: 60 }}
                      min={0}
                      {...form.getInputProps(`playerStats.${index}.standardPoints`)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <NumberInput
                        label="Yel"
                        style={{ width: 55 }}
                        min={0}
                        max={2}
                        {...form.getInputProps(`playerStats.${index}.yellowCards`)}
                      />
                      <NumberInput
                        label="Red"
                        style={{ width: 55 }}
                        min={0}
                        max={1}
                        {...form.getInputProps(`playerStats.${index}.redCards`)}
                      />
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          {submitError && (
            <Alert color="red" variant="light" mt="md">
              {submitError}
            </Alert>
          )}

          <Group justify="space-between" mt="xl">
            <Button variant="default" onClick={() => setActiveStep(0)}>
              Back
            </Button>
            <Button
              color="green"
              loading={submitting}
              onClick={() => handleFinalSubmit(form.values)}
            >
              Submit Match Log
            </Button>
          </Group>
        </Stepper.Step>
      </Stepper>
    </Paper>
  );
}