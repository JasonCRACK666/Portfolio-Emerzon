/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      padding: {
        layout2xl: "24rem",
        layoutxl: "16rem",
        layoutlg: "4rem",
        layoutmd: "0rem",
        layoutsm: "0rem",
      },
      fontFamily: {
        mplug: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
