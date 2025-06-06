/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx,mdx, html}"],
  theme: {
    extend: {
      colors: {
        primary: "#c6e4e7",
        secondary: "#20494d",
        input: "#f5fafb",
        danger: "#E0245E",

        formcalculate: "#5F7A7D",
        heading: "#20494D",
        main: "#5EC1AC",
      },
    },
  },
  plugins: [],
};
