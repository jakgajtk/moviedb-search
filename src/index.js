let movieDbApi = require('./movieDbApi.js').movieDbApi;

(function () {
  document.getElementById('search-movie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let searchText = document.getElementById('search-text').value;
    movieDbApi.getMovie(searchText);
  })
}())