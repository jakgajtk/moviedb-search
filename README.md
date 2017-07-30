Basic search application for movie db.
---------

Package manager: NPM
Module bundler: Webpack
Test framework: Jasmine
Test runner: Karma

Source files documentation:
---------

karma.conf.js: configuration file for karma (test runner)
package.json: NPM configuration file
package-lock.json: NPM automatically generated configuration file
webpack.config.js: Wepack configuration file
/src:
    index.js: entry point for entire application (webpack dependent)
    index.html: starting point for application
    config.js: contains basic configuration data
    movieDbApi.js: service for handling communication themoviedb-javascript-library
    dataRender.js: responsible for generating proper view based on search input
/dist: 
    bundle.js: bundled all source files into one by webpack (https://webpack.github.io/)
    index.html: starting point for application
    style.css: basic styling
