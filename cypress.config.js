const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://qauto.forstudy.space",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
    chromeWebSecurity: false,
    env: {
      username: "guest",
      password: "welcome2qauto",
      loginEmail: "Nicolo@mail.com",
      loginPassword: "Pass123!",
    },
  },
});
