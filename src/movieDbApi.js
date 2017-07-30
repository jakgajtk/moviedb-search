const config = require('./config.js').config;
const movieDb = require('../node_modules/themoviedb-javascript-library/themoviedb.min.js');
const appendList = require('./dataRender.js').appendList;

movieDb.common.api_key = config.apiKey;

var movieDbApi = {
    successCallback: function(data) {
        appendList(JSON.parse(data));
    },
    errorCallback: function(data) {
        console.log('Error callback: ', data);
    },
    getMovie: function(searchText) {
        movieDb.search.getMovie(
            {'query': searchText},
            movieDbApi.successCallback,
            movieDbApi.errorCallback
        )
    }
};

exports.movieDbApi = movieDbApi;