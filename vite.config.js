import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./build/app/", // Specify the output directory for the build process, defaults to 'dist'
    sourcemap: true,
  },
});
