const config = require('./config.js').config();
const movieDb = require('../node_modules/themoviedb-javascript-library/themoviedb.min.js');

console.log(config);
movieDb.common.api_key = config.apiKey;

var movieDbApi = {
    successCallback: function(data) {
        console.log("Success callback: " + data);
    },
    errorCallback: function(data) {
        console.log("Error callback: " + data);
    },
    getMovie: function(searchText) {
        movieDb.search.getMovie(
            {"query":"Fight%20Club"},
            movieDbApi.successCallback,
            movieDbApi.errorCallback
        )
    }
};

exports.movieDbApi = movieDbApi;