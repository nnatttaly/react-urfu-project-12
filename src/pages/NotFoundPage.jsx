import { Link } from "react-router-dom";
import routes from "../routes.js";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>Страница не найдена</h1>
      <p>
        Но вы можете перейти <Link to={routes.home}>на главную страницу</Link>
      </p>
    </section>
  );
}
