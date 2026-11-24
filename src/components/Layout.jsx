import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/">Hexlet Chat</Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
