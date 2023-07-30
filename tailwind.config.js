/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dbdbdb",
        secondary: "#cccaca",
      },
      fontFamily: {
        poppins: ["Poppins" , "sans-serif"],
      },
    },
    screens: {
      ss: "480px",
      sm: "620px",
      mm: "720px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1560px"
    },
  },
  plugins: [],
}

