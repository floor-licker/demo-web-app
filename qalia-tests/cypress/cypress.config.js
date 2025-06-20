const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8095',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    video: true,
    screenshotOnRunFailure: true,
  },
})
