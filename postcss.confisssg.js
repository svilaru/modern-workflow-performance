//const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer')
    // purgecss({
    //   content: ['./**/*.html'],
    //   css: ['src/assets/styles/*.scss'],
    //   fontFace: true
    // })
  ]
};
