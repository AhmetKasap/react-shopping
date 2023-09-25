/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        roboto : ['Roboto', "sans-serif"],
        rem : ['REM', 'sans-serif'],
        opsenSans : ['Open Sans', 'sans-serif'],
        inter : ['Inter', 'sans-serif'],
        roboto2: ['Roboto', 'sans-serif']
      },
      colors : {
        'me-orange' : '#FF671D'
      },
      width : {
        '128' : '32rem',
        '100' : '15rem',
        '256' : '64rem'
      },
      height : {
        '128' : '32rem',
        '192' : '48rem'
      }



    },
  },
  plugins: [],
}
