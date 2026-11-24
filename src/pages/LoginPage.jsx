import { useForm } from "@mantine/form";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import avatar from "../assets/avatar.jpg";

export default function LoginPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      password: "",
    },
    validate: {
      password: (value) => (value.length === 0 ? "Введите пароль" : null),
    },
  });

  return (
    <section className="login-card" aria-labelledby="login-title">
      <div className="login-content">
        <img className="login-avatar" src={avatar} alt="" />
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack gap="lg">
            <h1 id="login-title">Войти</h1>
            <TextInput
              label="Ваш ник"
              size="md"
              autoComplete="username"
              autoFocus
              key={form.key("name")}
              {...form.getInputProps("name")}
            />

            <PasswordInput
              label="Пароль"
              size="md"
              autoComplete="current-password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <Button type="submit" variant="outline" size="md" fullWidth>
              Войти
            </Button>
          </Stack>
        </form>
      </div>
      <footer className="login-footer">
        Нет аккаунта? <span>Регистрация</span>
      </footer>
    </section>
  );
}
