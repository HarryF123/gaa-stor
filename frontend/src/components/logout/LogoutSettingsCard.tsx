import { Button, Card, Group, Text } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

export function LogoutSettingsCard({ onLogout }: { onLogout: () => void }) {
  return (
    <Card withBorder padding="lg" radius="md" style={{ maxWidth: 440 }}>
      <Group justify="space-between" mb="xs">
        <Text fw={600} size="md">Account Session</Text>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        Terminate your current session credentials on this browser interface. All cached local state will be dropped immediately.
      </Text>

      <Group justify="flex-end" gap="sm">
        <Button variant="light" color="red" leftSection={<IconAlertTriangle size={16} />} onClick={onLogout}>
          Sign out of account
        </Button>
      </Group>
    </Card>
  );
}
