/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes: [
      {
        doctortheme:{
          "primary": "#ff0000",
          "secondary": "#202020",
          "accent": "#5d5656",
          "neutral": "#2c2c2c",
          
          "base-100": "#FFFFFF",
          "info": "#d4d4d4",
          // "base-150":"#9e9e9e"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

