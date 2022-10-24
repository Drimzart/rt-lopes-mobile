/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px'
    },
    extend: {
      colors: {
        bgbrown: '#7f615c',
        bgwhite: '#dadada',
        bgyellow: '#FAEFC5',
        bgbold: '#482920'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
