// tokens.config.js
module.exports = {
  source: ['tokens/tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      transforms: ['size/px'],
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    android: {
      transformGroup: 'android',
      transforms: ['size/px'],
      buildPath: 'build/android/',
      files: [{
        destination: 'tokens.xml',
        format: 'android/resources'
      }]
    },

  }
};
