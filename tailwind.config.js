/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Your default sans
                serif: ["Lora", "serif"], // For the pull-quote
                signature: ["Caveat", "cursive"], // For the signature
            },
            animation: {
                shine: "shine 2.5s infinite",
                buzz: "buzz 3s ease-in-out infinite", // <-- UPDATED duration
            },
            keyframes: {
                shine: {
                    "0%": { transform: "translateX(-100%) skewX(-25deg)" },
                    "100%": { transform: "translateX(100%) skewX(-25deg)" },
                },
                // --- UPDATED THIS BLOCK ---
                buzz: {
                    // This makes it buzz, then pause from 27% to 100%
                    "0%, 27%, 100%": { transform: "scale(1)" },
                    "7%": { transform: "scale(1.03) rotate(2deg)" },
                    "13%": { transform: "scale(0.98)" },
                    "20%": { transform: "scale(1.06) rotate(-2deg)" },
                },
                // --------------------------
            },
        },
    },
    plugins: [],
};
