/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': "200% center"},
        }
      }
    },
  },
  plugins: [],
}

