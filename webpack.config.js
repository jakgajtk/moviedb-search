var path = require('path');

module.exports = {
  target: 'web',
  entry: ['./src/config.js', 
  './src/movieDbApi.js',
  './node_modules/themoviedb-javascript-library/themoviedb.min.js',
  './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};