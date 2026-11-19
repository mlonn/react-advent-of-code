/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  // Keep CRA's output folder so the existing deploy setup keeps working
  build: { outDir: "build" },
  test: {
    globals: true,
    environment: "node",
  },
});
