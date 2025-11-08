import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useUsers } from "@/hooks/useUsers";
import * as styles from "./users.css";

export const Route = createLazyFileRoute("/users")({
  component: UsersPage,
});

function UsersPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UsersList />
    </Suspense>
  );
}

function UsersList() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error loading users</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.grid}>
        {users?.map((user) => (
          <div key={user.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{user.name}</h2>
            <p className={styles.cardText}>@{user.username}</p>
            <p className={styles.cardEmail}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
