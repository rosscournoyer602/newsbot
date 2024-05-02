/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      yellow: "#e1ad01",
      red: "#bb2b1b",
      black: "#161617",
      white: "#faf9f6",
    },
    extend: {},
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
