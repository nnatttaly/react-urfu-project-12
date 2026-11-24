import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>Страница не найдена</h1>
      <p>
        Но вы можете перейти <Link to="/">на главную страницу</Link>
      </p>
    </section>
  );
}
