/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077be",
        secondary: "#ff7f50",
        whatsapp: "#69f0f7",
      },
    },
  },
  plugins: [],
};
