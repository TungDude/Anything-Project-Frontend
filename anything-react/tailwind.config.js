/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green': '#50e050',
        'cyan': '#46cccc',
        'blue': '#3c8cc8',
        'lightgray': '#949494',
        'black': '#404040',
        'white': '#f7f9f9',
        'red': '#fe3232',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      backgroundColor: ['hover'], 
    },
  }, 
  plugins: [],
}

