/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            animation: {
                fadedown: "fadedown 1s ease",
                dropdown: "dropdown .33s ease",
                fadein: "fadein 1s ease-in",
            },
            keyframes: {
                fadedown: {
                    "0%": { opacity: 0, transform: "translateY(-20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadein: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                dropdown: {
                    from: { opacity: 0, transform: "scaleY(0)" },
                    to: { opacity: 1, transform: "scaleY(1)" },
                },
            },
        },
        fontSize: {
            sm: "1rem",
            base: "1.22rem",
            md: "1.22rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "1.763rem",
            "3xl": "2.153rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        fontFamily: {
            bebas: ["Bebas Neue", "cursive"],
            abel: ["Abel", "sans-serif"],
        },
    },
    plugins: [],
};
