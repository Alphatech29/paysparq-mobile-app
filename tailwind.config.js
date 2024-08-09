/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F66B04',
        secondary: '#451805',
        paysparq: '#FCEDD4',
        text: '#ffffff',
        dash: '#FFF9EC'
      },
      fontFamily: {
        inter: ['Inter-Regular', 'sans-serif'],
        interB: ['Inter-Bold', 'sans-serif'],
        interSB: ['Inter-SemiBold', 'sans-serif'],
        interM: ['Inter-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

