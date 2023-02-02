/** @type {import('tailwindcss').Config} */
// spell: disable
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
      colors: {
        dark: '#0D0D13',
        primary: '#565656',
        secondary: '#2461FF'
      }
    },
  },
  plugins: [],
};
