/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
