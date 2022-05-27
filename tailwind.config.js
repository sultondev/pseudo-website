module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["sans-serif"],
        alegreya: ["Alegreya Sans"]
      },
      backgroundImage: {
        "main-page-bg": "url('./src/assets/images/bg/main-bg.svg')"
      }
    },
    container: {
      padding: "60px",
      center: true
    }
  },
  plugins: []
};
