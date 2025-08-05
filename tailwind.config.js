import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import { match } from "assert";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // adjust if needed
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // include app dir for Next.js
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
      },
      blink: {
        "0%": { opacity: 0.2 },
        "20%": { opacity: 1 },
        "100%": { opacity: 0.2 },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        blink: "blink 1.4s both infinite",
      },
    },
  },
  plugins: [
    typography,
    containerQueries,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
