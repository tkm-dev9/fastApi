import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: "src",
  envDir: "config",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
