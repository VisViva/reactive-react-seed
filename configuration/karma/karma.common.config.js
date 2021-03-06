const webpackConfig = require('../webpack/webpack.test.config.js')

module.exports = {
    basePath: '',
    frameworks: ['mocha', 'sinon', 'chai'],
    client: {
        chai: {
            includeStack: true
        }
    },
    files: [
        '../../node_modules/babel-polyfill/dist/polyfill.js',
        '../../node_modules/isomorphic-fetch/fetch-npm-node.js',
        '../../node_modules/ramda/dist/ramda.min.js',
        '../../source/**/*.spec.js'
    ],
    preprocessors: {
        '../../node_modules/isomorphic-fetch/fetch-npm-node.js': ['webpack'],
        '../../source/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    port: 8090,
    colors: true,
    concurrency: Infinity,
    phantomjsLauncher: {
        exitOnResourceError: true
    },
    options: {
        windowName: 'Reactive React Seed - Tests',
        settings: {
            webSecurityEnabled: false
        }
    }
};
