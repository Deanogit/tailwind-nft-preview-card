/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['"Work Sans", sans-serif'],
    },
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        'fm-cyan': 'hsl(178, 100%, 50%)',
        'dark-blue-bg': 'hsl(217, 54%, 11%)',
        'dark-blue-card': 'hsl(216, 50%, 16%)',
        'dark-blue-line': 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
};
