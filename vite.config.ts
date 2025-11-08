import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
