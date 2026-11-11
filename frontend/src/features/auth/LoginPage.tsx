// src/features/auth/LoginPage.tsx
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Alert, Anchor, Button, Container, Paper, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { ApiError } from "../../auth/auth";
import { useAuth } from "../../auth/auth-context";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    initialValues: { identifier: "", password: "" },
    validate: {
      identifier: isNotEmpty("Enter your username or email"),
      password: isNotEmpty("Enter your password"),
    },
  });

  const submit = form.onSubmit(async (values) => {
    setError(null);
    setSubmitting(true);
    try {
      await login({ identifier: values.identifier.trim(), password: values.password });
      navigate(from, { replace: true });
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  });

  // Already signed in (for example after a refresh)? Go straight to the app.
  if (!loading && user) {
    return <Navigate to={from} replace />;
  }

  return (
    <Container size={420} my={60}>
      <Title ta="center">Welcome to GAA Stór</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Log in to see the map. No account yet?{" "}
        <Anchor component={Link} to="/register" size="sm">
          Create one
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={submit}>
          <Stack>
            {error && (
              <Alert color="red" variant="light">
                {error}
              </Alert>
            )}
            <TextInput label="Username or Email" autoComplete="username" {...form.getInputProps("identifier")} />
            <PasswordInput label="Password" autoComplete="current-password" {...form.getInputProps("password")} />
            <Button type="submit" loading={submitting} fullWidth>
              Log in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
