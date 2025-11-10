import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap"; // 1. Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Sitemap({
            hostname: "https://learnvera.com",
            
            // YOU MUST MANUALLY LIST ALL YOUR ROUTES HERE
            dynamicRoutes: [
                "/about",
                "/contact",
                "/privacy-policy",
                "/terms-and-conditions",
                "/refund-policy",
            ],
        }),
    ],
    optimizeDeps: {
        exclude: ["lucide-react"],
    },
});
