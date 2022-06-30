/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      minB: ["MinSans-Bold", "MinSans-Bold"],
      min1: ["MinSans-Medium", "MinSans-Medium"],
      min2: ["MinSans-Regular", "MinSans-Regular"],
      min3: ["MinSans-Light", "MinSans-Light"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
