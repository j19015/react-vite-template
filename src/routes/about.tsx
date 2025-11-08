import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4">This is the about page.</p>
    </div>
  );
}
