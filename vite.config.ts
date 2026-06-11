import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "favicon-32x32.png", "favicon-16x16.png", "apple-touch-icon.png", "robots.txt"],
      manifest: {
        name: "Muhammad Faizan",
        short_name: "M. Faizan",
        description:
          "ML engineer and Data Science student building pipelines, models, and applied AI systems.",
        theme_color: "#2563eb",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  define: {
    "import.meta.env.BUILD_DATE": JSON.stringify(new Date().toISOString()),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
