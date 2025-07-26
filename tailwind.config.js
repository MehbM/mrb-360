export default {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    colors: {
      primary: "#1E40AF",
      accent: "#3B82F6",
      bgLight: "#F9FAFB",
      textDark: "#111827",
      cardLight: "#E5E7EB",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
