context('The spy who had a before()', () => {

  it('click the "log an error" button', () => {
    cy.visit('http://localhost:8080/commands/spies-stubs-clocks')
    cy.get('#log-an-error-div').click()
  })

  })
  