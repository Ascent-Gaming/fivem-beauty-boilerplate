module.exports = {
  // See https://tailwindcss.com/docs/optimizing-for-production#overview
  // for more options on optimization.
  purge: {
    // Remove all styling; leaves a minimal amount of accessibility-centered styling.
    // mode: 'all',
    // preserveHtmlElements: false,
    content: [
      './src/html/**/*.html',
      './src/html/**/*.js',
    ],
    // Remove unused animation keyframes
    // options: {
    //   keyframes: true
    // }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
