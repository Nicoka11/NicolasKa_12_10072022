

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
  envDir: "env/",
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "src") },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
    ],
  },
});
