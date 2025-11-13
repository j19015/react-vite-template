import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

import { routeTree } from "./routeTree.gen";

type ReactQueryDevtoolsComponent =
  typeof import("@tanstack/react-query-devtools").ReactQueryDevtools;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const router = createRouter({
  routeTree,
  basepath: import.meta.env.PROD ? "/react-vite-template/" : "/",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

interface PrepareResult {
  Devtools: ReactQueryDevtoolsComponent | null;
}

const prepare = async (): Promise<PrepareResult> => {
  if (!import.meta.env.DEV) {
    return { Devtools: null };
  }

  const [{ worker }, devtoolsModule] = await Promise.all([
    import("./mocks/browser"),
    import("@tanstack/react-query-devtools"),
  ]);

  await worker.start({ onUnhandledRequest: "bypass" });

  return { Devtools: devtoolsModule.ReactQueryDevtools };
};

const bootstrap = async () => {
  const { Devtools } = await prepare().catch((error) => {
    if (import.meta.env.DEV) {
      console.error("Failed to initialize development tooling", error);
    }

    return { Devtools: null } satisfies PrepareResult;
  });

  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }

  const DevtoolsComponent = Devtools;

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {DevtoolsComponent ? <DevtoolsComponent initialIsOpen={false} /> : null}
        </QueryClientProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

void bootstrap();
