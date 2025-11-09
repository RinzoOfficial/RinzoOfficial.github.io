import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    runtimeErrorOverlay(),
    {
      name: 'copy-favicon',
      writeBundle() {
        const sourcePath = path.resolve(__dirname, 'icon.ico');
        const destPath = path.resolve(__dirname, 'dist/public/favicon.ico');
        fs.copyFileSync(sourcePath, destPath);
      },
    },
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'favicon.ico') {
            return 'favicon.ico';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
