import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // `BUILD_FILE` is only set when rendering the PDF file from Node
  define: {
    "process.env.BUILD_FILE": "undefined",
  },
  // `dist` is reserved for the generated PDF, and would be emptied on build
  build: {
    outDir: "build",
  },
  server: {
    open: true,
    port: 3000,
  },
});
