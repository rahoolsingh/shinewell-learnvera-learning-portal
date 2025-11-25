import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
    // 1. Ensure build output is explicit
    build: {
        // outDir: "dist",
    },
    plugins: [
        react(),
        // Sitemap({
        //     // 2. Explicitly tell sitemap plugin where to write files
        //     outDir: "dist",
        //     hostname: "https://learnvera.com",
        //     generateRobotsTxt: true,

        //     // 3. Updated routes based on your App.jsx
        //     dynamicRoutes: [
        //         "/",
        //         "/about",
        //         "/contact",
        //         "/success-stories", // Added this from your router
        //         "/privacy-policy",
        //         "/terms-and-conditions",
        //         "/refund-policy",
        //     ],
        // }),
    ],
    optimizeDeps: {
        exclude: ["lucide-react"],
    },
});
