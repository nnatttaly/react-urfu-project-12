import { useForm } from "@mantine/form";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth.js";
import { useAuthStore } from "../store/authStore.js";
import routes from "../routes.js";
import avatar from "../assets/avatar.jpg";

export default function LoginPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length === 0 ? "Введите ник" : null),
      password: (value) => (value.length === 0 ? "Введите пароль" : null),
    },
  });

  const setAuthData = useAuthStore((state) => state.setAuthData);
  const navigate = useNavigate();

  async function handleLogin({ username, password }) {
    try {
      const { token } = await login({ username, password });
      setAuthData(token, username);
      navigate(routes.home, { replace: true });
    } catch (error) {
      form.setFieldError(
        "password",
        error.status === 401
          ? "Неверные имя пользователя или пароль"
          : "Не удалось войти. Проверьте соединение и попробуйте ещё раз",
      );
    }
  }

  return (
    <section className="login-card" aria-labelledby="login-title">
      <div className="login-content">
        <img className="login-avatar" src={avatar} alt="" />
        <form onSubmit={form.onSubmit(handleLogin)}>
          <Stack gap="lg">
            <h1 id="login-title">Войти</h1>
            <TextInput
              label="Ваш ник"
              size="md"
              autoComplete="username"
              disabled={form.submitting}
              autoFocus
              key={form.key("username")}
              {...form.getInputProps("username")}
            />

            <PasswordInput
              label="Пароль"
              size="md"
              autoComplete="current-password"
              disabled={form.submitting}
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <Button
              type="submit"
              variant="outline"
              size="md"
              fullWidth
              loading={form.submitting}
            >
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
