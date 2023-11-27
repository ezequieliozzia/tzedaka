/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "84vh": "84vh",
      },
      scale: {
        60: "0.6",
        80: "0.8",
      },
      colors: {
        "pink-card": "#f0e8f3",
      },
    },
    fontFamily: {
      MyFont: ["raleway", "Helvetica", "Arial", "sans-serif"],
      "tzedaka-body": ["TzedakaEmediaBody", "sans-serif"],
      "tzedaka-titles": ["TzedakaEmediaEmphasis", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
