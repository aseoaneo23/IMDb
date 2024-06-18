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
    VALID_USER: 'username',
    VALID_PASSWORD: 'password'

    //excludeSpecPattern: "*.js",
    //env: {
    //TAGS: "@focus"
    //},
  },
  
});
