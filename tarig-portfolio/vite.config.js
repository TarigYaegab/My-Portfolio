import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// BASE_PATH matters only if you deploy to GitHub Pages as a *project* page
// (username.github.io/repo-name). Set it via env var when building, e.g.:
//   VITE_BASE_PATH=/repo-name/ npm run build
// For a custom domain, a user/organization Pages site, Vercel, or Netlify,
// leave it as "/".
var base = process.env.VITE_BASE_PATH || "/";
export default defineConfig({
    base: base,
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        target: "es2020",
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                },
            },
        },
    },
});
