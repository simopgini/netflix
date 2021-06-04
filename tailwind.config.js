module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "netflix-black": "#141414",
      },
    },
  },
  variants: {
    extend: { animation: ["motion-safe"] },
  },
  plugins: [require("@tailwindcss/typography")],
  mode: "jit",
};
