const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
  const webpackConfiguration = require('./webpack.config');

  webpackConfiguration.entry = {};
  webpackConfiguration.resolve.extensions = ['', '.js'];
  webpackConfiguration.entryPatterns = ['app/app.js', 'test/index.js', 'test/**/*.spec.js'];
  webpackConfiguration.resolve.root = wallaby.projectCacheDir;
  webpackConfiguration.module.loaders.shift();

  return {
    files: [
      { pattern: 'app/**/*.js', load: false },
      { pattern: 'app/**/*.ts', load: false },
      { pattern: 'app/**/*.html', load: false },
      { pattern: 'app/**/*.scss', load: false },
      { pattern: 'test/index.js', load: false }
    ],
    tests: [
      { pattern: 'test/**/*.spec.js', load: false }
    ],
    testFramework: 'jasmine',
    env: {
      kind: 'electron'
    },
    postprocessor: wallabyWebpack(webpackConfiguration),
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
