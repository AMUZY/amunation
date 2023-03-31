/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs : '375px',
      sm : '480px',
      md: '768px',
      lg: '1200px',
      xl: '1700px'
    },
    extend: {
      colors : {
        brightRed : '#0000',
        buttonColorBlue : 'blue',
    }
    }
  },
  plugins: [],
}
