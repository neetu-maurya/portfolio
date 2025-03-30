/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm:"350px",
      md:"768px",
      lg:"1024px",
      xl:"1280",
      "2xl":"1536px",


    },
    extend: {
      boxShadow:{
        cyanShadow:'0px 0px 20px 0px rgba(94,206,220,0.5)',
        cyanMediumShadow:"10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMediumShadow:"10px 10px 200px 150px rgba(240,169,79,0.51)"
      }
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ["Roboto"],
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d2b422",
      grey: "#625965",
      lightGray: "#978580",
      darkGray: "#3f4441",
    },
  },
  plugins: [],
};
