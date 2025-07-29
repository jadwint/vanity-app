import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // adjust if needed
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // include app dir for Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
