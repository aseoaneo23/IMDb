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
    VALID_USER: 'myke48021@gmail.com',
    VALID_PASSWORD: 'Myke12_34'

    //excludeSpecPattern: "*.js",
    //env: {
    //TAGS: "@focus"
    //},
  },
  
});
