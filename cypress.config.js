const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    viewportHeight: 335,
    viewportWidth: 999,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
