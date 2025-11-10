import { defineConfig } from "vitest/config";
import reactSwc from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/react-vite-template/" : "/",
  plugins: [
    reactSwc(),
    TanStackRouterVite(),
    vanillaExtractPlugin(),
    checker({
      typescript: true,
      // ESLint checker disabled due to incompatibility with ESLint 9
      // Run `pnpm run lint` manually for linting
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "React Vite SPA Template",
        short_name: "React Vite",
        description: "Modern React + Vite SPA Template",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    ViteImageOptimizer(),
  ],
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
