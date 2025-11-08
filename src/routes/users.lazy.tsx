import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load the users component
const UsersContent = lazy(() => import("@/components/UsersExample"));

export const Route = createLazyFileRoute("/users")({
  component: Users,
});

function Users() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UsersContent />
    </Suspense>
  );
}
