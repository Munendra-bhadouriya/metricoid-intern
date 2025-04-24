/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: '#E31F71',
        black: '#212121',
        green: '#23ce6b',
        blue: '#016fb9',
      },
      fontFamily: {
        redHat: ['"Red Hat Display"', 'sans-serif'],
      },
      borderRadius: {
        xl: '2rem',
      },
      transitionDuration: {
        500: '500ms',
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.68, -0.55, 0.27, 01.55)', // Custom timing function
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #343d68, #343d68be, #343d687c)',
      },
      boxShadow: {
        'custom-shadow': '5px 5px 7px 0px rgba(0, 0, 0, 0.3)',
        'custom-project-card-shadow': '0px 0px 40px #1f1f1f',
        'custom-dark-project-card-shadow' : '0px 0px 50px 0px rgba(255, 255, 255, 0.15)'
      },
      dropShadow: {
        'custom' : '2px 10px 20px rgba(255, 255, 255, 0.32)',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}

