const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://www.imdb.com/",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 120000
  },
  env: {
    VALID_USER: process.env.CYPRESS_VALID_USER || 'default email',
    VALID_PASSWORD: process.env.CYPRESS_VALID_PASSWORD || 'default password'
    //TAGS: "@focus"
  }
});
