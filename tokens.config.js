// tokens.config.js
module.exports = {
  source: ['tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['size/px'],
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    scss: {
      transformGroup: 'scss',
      transforms: ['size/px'],
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      transforms: ['size/px'],
      buildPath: 'build/js/',
      files: [{
        destination: 'variables.js',
        format: 'javascript/es6'
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
