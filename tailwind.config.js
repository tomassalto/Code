const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/accordion.js",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#82BEA2",
        light_teal: "#E3E6D1",
        yellow: "#F0C200",
        light_yellow: "#FEF0C8",
        charcoal: "#222222",
        olive_gray: "#6F675A",
        dark_gray: "#525252",
        gray: "#999999",
        medium_gray: "#C1C1C1",
        light_gray: "#EBEBEB",
        red: "#E50505",
        orange: "#FF6B00",
        green: "#00DB75",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        serif_display: ["var(--font-serif-display)"],
        dm_sans: ["var(--font-dm-sans)"],
      },
      screens: {
        xxs: "375px",
        xs: "390px",
        sm: "640px",
        xmd: "720px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xhd: "1440px",
        hd: "1536px",
        fullhd: "1920px",
        qhd: "2560px",
        ultra: "3840px",
      },
    },
  },
  plugins: [[nextui()]],
};
