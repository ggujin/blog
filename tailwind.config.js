/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1e293b",
          main: "#0f172a",
          dark: "#020617",
        },
        contents: {
          light: "#ffffff",
          main: "#f3f4f6",
          dark: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
}
