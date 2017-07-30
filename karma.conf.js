var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'src/tests/*.spec.js', watched: false}
    ],
    webpack: webpackConfig,
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true,
    webpackMiddleware: {
        noInfo: true,
        stats: {
            chunks: false
        }
    },
    preprocessors: {
        './src/tests/*.spec.js': ['webpack']
    }
  });
};