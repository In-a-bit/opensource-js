import { defineConfig } from "vite";
import { combinedSvgReact } from "@inabit/vite-plugin-combined-svg-react";

export default defineConfig({
  plugins: [combinedSvgReact()],
});
