describe('configuration', function() {
    it('should receive config file on init', function() {
        var config = require('../config.js').config;
        expect(config).toBeDefined();
        expect(config.apiKey).toBeDefined();
    });
});