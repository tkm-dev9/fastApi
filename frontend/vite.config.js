import { defineConfig } from "vite";

const apiUrl = process.env.API_URL;

export default defineConfig({
  root: 'view',
  publicDir: '../script',
  define: {
    __API_URL__: JSON.stringify(apiUrl)
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
});