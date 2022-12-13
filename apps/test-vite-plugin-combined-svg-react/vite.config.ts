import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import combinedSvgReact from "@inabit/vite-plugin-combined-svg-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react(), combinedSvgReact()],
});
