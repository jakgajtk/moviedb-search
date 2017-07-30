var movieDbApi = require('../movieDbApi.js').movieDbApi;
var config = require('../config.js').config;
var movieDb = require('../libs/themoviedb.min.js');
var dataRender = require('../dataRender.js');

describe('movieDB API', function() {
    it('should init movieDbAPI', function() {
        expect(movieDbApi.getMovie).toBeDefined();
    });
});