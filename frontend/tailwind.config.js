/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgreen: "#44d62c",
        customgray: "#222",
      },
    },
  },
  plugins: [],
};
