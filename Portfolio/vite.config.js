import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // <- Mets ici le nom exact de ton repo avec les majuscules
  plugins: [react()],
});
