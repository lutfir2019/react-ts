import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// const env = loadEnv("", process.cwd());
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  base: "/",
});