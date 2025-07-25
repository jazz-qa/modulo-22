const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
        "reportDir": "mochawesome-report",
        "overwrite": false,
        "reportFilename": "index.html",
        "html": true,
        "json": false
    },
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-html-reporter/GenerateReport')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});