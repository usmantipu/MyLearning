exports.config = {
//
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
  user: process.env.BROWSERSTACK_USERNAME || 'visplimited_Tetioz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '6N6HNKi4sh5d2HYSw78q',

  updateJob: false,
  specs: ['./features/**/*.feature'],
  exclude: [
    // 'path/to/excluded/files'
  ],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'https://staging.visp.net/',
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      { 
        browserstackLocal: true, 
        buildIdentifier: '#${BUILD_NUMBER}', 
        opts: { 
          forcelocal: false, 
          localIdentifier: 'webdriverio-browserstack-repo' 
        } 
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
      
    },
    {
      browserName: 'safari',
      'bstack:options': {
        deviceName: 'iPhone 14',
        osVersion: '16',
        deviceOrientation: 'portrait'
      }
    }
  ],
  framework: 'cucumber',
  reporters: ['spec',
              ['allure', {
                outputDir: './results/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            }]
        ],
        cucumberOpts: {
          require: [
           './features/steps/login_steps.js',
           './features/steps/dashboard_steps.js',
           './features/steps/subscriberlist_steps.js',
           './features/steps/equipment_steps.js',
           './features/steps/serviceDesk_steps.js',
           './features/steps/email_steps.js',
           './features/steps/addticket_steps.js',
           './features/steps/IRM_steps.js',
           './features/steps/subscriberDetailsPayments_steps.js',
           './features/steps/subscriberDetailsAddPackage_steps.js',
           './features/steps/subscriberDetailsBillingOptions_steps.js',
           './features/steps/subscriberDetailsCustomFields_steps.js',
           './features/steps/subscriberDetailsPackageInvoice_steps.js',
           './features/steps/subscriberDetailsContact_steps.js',
           './features/steps/addProspect_steps.js',
           './features/steps/subscriberDetailsTransactions_steps.js',
           './features/steps/subscriberDetailsLogs_steps.js',
           './features/steps/subscriberDetailsAttachment_steps.js',
           './features/steps/subscriberDetailsNotes_steps',
           './features/steps/bulkPayments_steps.js',
           './features/steps/searchExistingFilters_steps.js',
           './features/steps/searchAddTicket_steps.js',
           './features/steps/searchFilters_steps.js',
           './features/steps/search_steps.js',
           './features/steps/alertsValidations_steps.js',
           './features/steps/alertsPackage_steps.js',
           './features/steps/alertsSubscriber_steps.js',
           './features/steps/SDAddAttachment_steps.js',
           './features/steps/SDaddNote_steps.js',
           './features/steps/SDaddTask_steps.js',
           './features/steps/SDbomPackage_steps.js',
           './features/steps/SDcalendar_steps.js',
           './features/steps/SDCalendarSearch_steps.js',
           './features/steps/SDLinkTicket_steps.js',
           './features/steps/SDLinkTicketValidation_steps.js',
           './features/steps/SDMergeTicket_steps.js',
           './features/steps/SDTicketTypes_steps.js',
           './features/steps/paymentGatewaysCreditCard_steps.js',
           './features/steps/InvoicingPackageItems_steps.js',
           './features/steps/crm_steps.js',
           './features/steps/_crmCalendar_steps.js',
           './features/steps/_CRMCalendarSearch_steps.js',
           './features/steps/_crmAddAttachment_steps.js',
           './features/steps/_CRMaddTask_steps.js',
           './features/steps/infraLocationsRemoveContact_steps',
           './features/steps/infraLocationsRemoveProfile_steps'
          ],
     
          // <boolean> show full backtrace for errors
          backtrace: false,
     
          compiler: [],
     
          requireModule: [],
     
          // <boolean> invoke formatters without executing steps
          dryRun: false,
     
          // <boolean> abort the run on first failure
          failFast: false,
     
          // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
          format: ['pretty'],
     
          // <boolean> hide step definition snippets for pending steps
          snippets: true,
     
          // <boolean> hide source uris
          source: true,
     
          // <string[]> (name) specify the profile to use
          profile: [],
     
          // <boolean> fail if there are any undefined or pending steps
          strict: false,
     
          // <string> (expression) only execute the features or scenarios with tags matching the expression
          tagExpression: '@browserStack',
          // '@regression2021-SubList-Notes',
          // '@Beta-TA-207',
          // <number> timeout for step definitions
          timeout: 90000,
     
          // <boolean> Enable this config to treat undefined definitions as warnings.
          ignoreUndefinedDefinitions: false
         },
         logLevel: 'info',
         outputDir: './log',
         bail: 0,
         reporters: ['spec',
              ['allure', {
                outputDir: './results/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            }]
        ],
        //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     */
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    /**
     * Runs before a Cucumber scenario
     */
    // beforeScenario: function (uri, feature, scenario, sourceLocation, context) {
    // },
    /**
     * Runs before a Cucumber step
     */
    // beforeStep: function ({ uri, feature, step }, context) {
    // },
    /**
     * Runs after a Cucumber step
     */
    // afterStep: function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Runs after a Cucumber scenario
     */
    // afterScenario: function (uri, feature, scenario, result, sourceLocation, context) {
    // },
    /**
     * Runs after a Cucumber feature
     */
    // afterFeature: function (uri, feature, scenarios) {
    // },
    afterScenario: (uri, feature, scenario, result, sourceLocation, context) => {//Screenshot for quick reference
      scName = scenario.name;
      scName = scName.replace(/\s/g, '-');
      scName = scName.replace(/\,/g, '-')
      console.log('Finished test >>>>>>>> ' + scName)
     
      if (result.status === 'failed'){
       browser.saveScreenshot('./errorShots/'+ scName +'.png'); 
      }
       
      },
  afterStep: function (test, context, { error, result, duration, passed, retries }) {//Screenshot for Allure report
          if (error) {
            browser.takeScreenshot();
            browser.pause(1000);
          //  browser.execute('localStorage.clear()');
          //  browser.closeWindow()
          }
        },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
  * Gets executed when a refresh happens.
  * @param {String} oldSessionId session ID of the old session
  * @param {String} newSessionId session ID of the new session
  */
  //onReload: function(oldSessionId, newSessionId) {
  //}
}
