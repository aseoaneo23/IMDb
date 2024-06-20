const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wfsn2i',
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://www.imdb.com/",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,

    //excludeSpecPattern: "*.js",
    //env: {
    //TAGS: "@focus"
    //},
  },
  env: {
    VALID_USER: 'Your user',
    VALID_PASSWORD: 'Your pass'
  }
  
});
