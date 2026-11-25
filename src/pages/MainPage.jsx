import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore.js";
import routes from "../routes.js";

export default function MainPage() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to={routes.login} replace />;
  }

  return <>MainPage</>;
}
