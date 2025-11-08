import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-gray-600">Built with React + Vite + TanStack Router</p>
    </div>
  );
}
