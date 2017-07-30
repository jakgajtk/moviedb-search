const config = require('./config.js').config;
const movieDb = require('./libs/themoviedb.min.js');
const appendList = require('./dataRender.js').appendList;
const appendError = require('./dataRender.js').appendError;

movieDb.common.api_key = config.apiKey;

var movieDbApi = {
    successCallback: function(data) {
        appendList(JSON.parse(data));
    },
    errorCallback: function(data) {
        appendError(JSON.parse(data));
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