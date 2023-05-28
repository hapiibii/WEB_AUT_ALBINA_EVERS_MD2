const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 900,
    viewportWidth: 1440,
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
  },
});
