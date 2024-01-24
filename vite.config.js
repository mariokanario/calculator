import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.endsWith(".json")) {
          return "json";
        }
      },
    },
  },
});
