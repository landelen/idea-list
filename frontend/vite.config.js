import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bored-api": {
        target: "https://bored-api.appbrewery.com/random",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bored-api/, ""),
      },
      "/backend-api": {
        target: "http://localhost:3000",
        rewrite: (path) => path.replace(/^\/backend-api/, ""),
      },
    },
  },
});
