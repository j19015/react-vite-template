import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import * as styles from "./__root.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/users" className={styles.link}>
            Users (Lazy)
          </Link>
        </nav>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
