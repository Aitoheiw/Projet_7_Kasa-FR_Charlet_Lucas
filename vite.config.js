import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/Projet_7_Kasa-FR_Charlet_Lucas/",
  plugins: [react()],
});
