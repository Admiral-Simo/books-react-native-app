// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "inter": ["Inter-Black", "sans-serif"] },
      fontFamily: { "robreg": ["Roboto-Regular", "sans-serif"] },
    },
  },
  plugins: [],
};
