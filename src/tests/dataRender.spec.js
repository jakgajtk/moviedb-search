var config = require('../config.js').config;
var dataRender = require('../dataRender.js');
var document, window;

describe('dataRender ', function() {
    beforeEach(function() {
        window = {
            open: function(a, b) {}
        }
    });

    describe('appendDataToView', function() {
        it('should append given data to DOM', function() {
            var data = {
                results: [{
                    original_title: 'first title',
                    icon: 'first link',
                    vote_average: '10',
                    vote_count: '100'
                }, {
                    original_title: 'second title',
                    icon: 'second link',
                    vote_average: '5',
                    vote_count: '505'
                }],
                total_pages: 1,
                total_results: 2
            };
            // @todo: 
            // mock window and document properly. write rest of the tests.
        })
    })
})