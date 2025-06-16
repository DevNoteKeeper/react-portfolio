module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bgDark: "#171A35",
        gTitle: "#CCD6F6",
        gDesc: "#8892B0",
        point: "#64FFDA",
      },
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
      },
      fontSize: {
        sectionTitle: ["1.8rem", { fontWeight: "700" }], // 32px, 44.8px(140%)
        sectionSubTitle: ["1.5rem", { fontWeight: "700" }], // 24px, 33.6px(140%)
        sectionDescription: ["1.2rem", { fontWeight: "400" }], // 24px, 33.6px(140%)
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(5deg)" },
          "30%": { transform: "rotate(-3deg)" },
          "45%": { transform: "rotate(4deg)" },
          "60%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
          "90%": { transform: "rotate(-1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        swing: "swing 3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
