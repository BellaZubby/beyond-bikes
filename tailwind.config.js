/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100":"#D9D9D9",
        "primary-100":"#89B101",
        "Primary-200":"#739500",
        "primary-300" : "#05AF2B",
        "secondary-100": "#8DB600",
        "secondary-200": "#739500",
        "secondary-300": "rgba(16,16,16,0.5)",
        "gray-200": "#121701",
        "gray-300": "#000000",
        "gray-400": "#606060",
        "gray-500": "#ACACAC",
        "gray-600": "#F1F1F1",
        "tertiary-100":"#303030",
        "tertiary-200": " #111111"
      },
      // backgroundImage: (theme) => ({
      //   "gradient-color":"linear-gradient(90deg, #8DB600 100%, #739500 100%)",
      //   "mobile-home":"url('./assets/hero-image.png')"
      // }),
      fontFamily: {
        robotoCondensed:["Roboto Condensed", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"]
      },
        

    },
    screens: {
      '3xs': "200px",
      '2xs': "350px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

