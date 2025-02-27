/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        hepta : ["Hepta Slab"],
        poppins : ["Poppins"],
    },
    },
  },
  plugins: [],
}

