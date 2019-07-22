// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.window().then((win) => {
        cy.wrap(cy.spy(win.console, "error")).as('spyWinConsoleError')
        cy.wrap(cy.spy(win.console, "warn")).as('spyWinConsoleWarn')
    })
})

afterEach( () => {
    cy.get('@spyWinConsoleError').then((spy) => {
        expect(spy).to.have.callCount(1)

        // // This the actual intended expect statement for the purposes of failing the test on any errors logged at runtime.
        // expect(spy).to.have.callCount(0)
    })
    cy.get('@spyWinConsoleWarn').then((spy) => {
        expect(spy).to.have.callCount(0)
    })
})
