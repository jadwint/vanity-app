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
    extend: {},
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
