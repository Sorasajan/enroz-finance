/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#0d1b2a',
        navy:      '#1565c0',
        navydark:  '#0d47a1',
        navylight: '#e3f2fd',
        sage:      '#5cb85c',
        sagedark:  '#388e3c',
        sagelight: '#e8f5e9',
        cream:     '#f7f9fc',
        mist:      '#e8edf5',
        slate:     '#5a6275',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body:    ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
