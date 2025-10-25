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
        },
    },
    plugins: [],
};
