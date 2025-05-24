module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bgDark: '#171A35',
        gTitle: '#CCD6F6',
        gDesc: '#8892B0',
        point: '#64FFDA',
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
