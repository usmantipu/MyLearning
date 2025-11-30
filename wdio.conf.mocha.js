exports.config = {
    // WebdriverIO Runner Configuration
    runner: 'local',

    // Test files to run
    specs: [
        './features/api-tests/sample-api-test.js',  // Single file
        // './features/api-tests/**/*.js'           // Alternatively, for multiple test files
    ],

    // Exclude nothing (or specific files if necessary)
    exclude: [],

    // Capabilities (if you want to run browser tests too)
    maxInstances: 1,
 
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu'],
        }
    }],

    logLevel: 'info',  // Set to 'debug' if you want detailed logs
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    // WebdriverIO Services
//    services: ['selenium-standalone'],  // If you're also running browser tests

    // Test framework to use

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: ['spec'],

    before: function (capabilities, specs) {
        // Runs before tests
    },

    after: function (result, capabilities, specs) {
        // Runs after tests
    }
};
