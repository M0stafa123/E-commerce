/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        textEf: 'textEf 10s ease-in-out infinite',
      }
      ,
      keyframes: {
        textEf: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        'Poppins': ['Poppins', `sans-serif`],
      }
    },
  },
  plugins: [],
}