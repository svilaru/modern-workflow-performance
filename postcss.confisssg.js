//const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer')
    // purgecss({
    //  content: ['./**/*.html'],
    //  css: ['assets/styles/main.scss'],
    //  fontFace: true
    // }) */
  ]
};
