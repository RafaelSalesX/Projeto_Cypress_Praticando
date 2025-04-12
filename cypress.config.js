const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6uw3ss',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Cypress com reports',
      reportPageTitle: 'Projeto Cypress com reports'
    },
    baseUrl: "http://automationpratice.com.br/",
    defaultCommandTimeout: 5000, //Comando para aguardo de visualização dos elementos
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
