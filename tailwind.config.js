/** @type {import('tailwindcss').Config} */

const colors = {
  "cornflower-blue": {
    50: "#ebecff",
    100: "#daddff",
    200: "#bdc0ff",
    300: "#9596ff",
    400: "#786bff",
    500: "#6749ff",
    600: "#5d29ff",
    700: "#511de5",
    800: "#421bb8",
    900: "#381f90",
    950: "#130a2e",
  },
  aquamarine: {
    50: "#eefff7",
    100: "#d7ffee",
    200: "#b2ffde",
    300: "#66ffbf",
    400: "#33f5a5",
    500: "#09de86",
    600: "#01b86c",
    700: "#059058",
    800: "#0a7148",
    900: "#0a5d3d",
    950: "#003420",
  },
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
      jp: ["var(--font-jp)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors["cornflower-blue"],
        emphasis: colors["aquamarine"],
      },
    },
  },
  plugins: [],
};
