const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'src/**/*.cy.js',
    specPattern: '**/*.cy.js',
  },
})