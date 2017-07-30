Basic search application for movie db.
---------

Package manager: NPM<br />
Module bundler: Webpack<br />
Test framework: Jasmine<br />
Test runner: Karma<br />

Source files documentation:
---------

* karma.conf.js: configuration file for karma (test runner)<br />
* package.json: NPM configuration file<br />
* package-lock.json: NPM automatically generated configuration file<br />
* webpack.config.js: Wepack configuration file<br />
* /src:<br />
- index.js: entry point for entire application<br />
- index.html: starting point for application<br />
- config.js: contains basic configuration data<br />
- movieDbApi.js: service for handling communication themoviedb-javascript-library<br />
- dataRender.js: responsible for generating proper view based on search input<br />
* /dist: <br />
- bundle.js: bundled all source files into one by webpack (https://webpack.github.io/)<br />
- index.html: starting point for application<br />
- style.css: basic styling<br />
