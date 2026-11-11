// src/features/auth/RegisterPage.tsx
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert, Anchor, Button, Container, Group, Paper, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from "@mantine/form";
import { ApiError, registerUser } from "../../auth/auth";
import { useAuth } from "../../auth/auth-context";

const today = new Date().toISOString().slice(0, 10);

export default function RegisterPage() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // These rules mirror the backend's validation; the backend is still the one that enforces them.
  // ADAPT the username rule to whatever your UserRegistrationRequest accepts.
  const form = useForm({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      username: (v) =>
        /^[a-zA-Z0-9_.-]{3,30}$/.test(v.trim()) ? null : "3 to 30 characters: letters, numbers, . _ -",
      firstName: isNotEmpty("Required"),
      lastName: isNotEmpty("Required"),
      email: isEmail("Enter a valid email"),
      dateOfBirth: (v) => (!v ? "Required" : v > today ? "Date can't be in the future" : null),
      password: hasLength({ min: 8, max: 72 }, "Use 8 to 72 characters"),
      confirmPassword: matchesField("password", "Passwords don't match"),
    },
  });

  const submit = form.onSubmit(async (v) => {
    setError(null);
    setSubmitting(true);
    try {
      await registerUser({
        username: v.username.trim(),
        firstName: v.firstName.trim(),
        lastName: v.lastName.trim(),
        email: v.email.trim(),
        dateOfBirth: v.dateOfBirth,
        password: v.password,
      });
      await login({ identifier: v.username.trim(), password: v.password }); // sign them straight in
      navigate("/", { replace: true });
    } catch (e) {
      if (e instanceof ApiError && Object.keys(e.fieldErrors).length > 0) {
        form.setErrors(e.fieldErrors); // shows each message next to its field
      } else {
        setError(e instanceof ApiError ? e.message : "Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  });

  if (!loading && user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container size={460} my={40}>
      <Title ta="center">Create your account</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already registered?{" "}
        <Anchor component={Link} to="/login" size="sm">
          Log in
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
            <TextInput label="Username" autoComplete="username" {...form.getInputProps("username")} />
            <Group grow align="flex-start">
              <TextInput label="First name" autoComplete="given-name" {...form.getInputProps("firstName")} />
              <TextInput label="Last name" autoComplete="family-name" {...form.getInputProps("lastName")} />
            </Group>
            <TextInput label="Email" autoComplete="email" {...form.getInputProps("email")} />
            <TextInput
              type="date"
              label="Date of birth"
              max={today}
              autoComplete="bday"
              {...form.getInputProps("dateOfBirth")}
            />
            <PasswordInput
              label="Password"
              description="8 to 72 characters"
              autoComplete="new-password"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm password"
              autoComplete="new-password"
              {...form.getInputProps("confirmPassword")}
            />
            <Button type="submit" loading={submitting} fullWidth>
              Create account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
