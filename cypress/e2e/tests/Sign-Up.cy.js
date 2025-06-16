
describe('Verify Sign Up Functionality', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
it('Validate the register account, providing only the mandatory fields', () => {
    cy.visit('https://beta.peoplematters.in')
    cy.wait(2000)
    cy.get('.fixed > .absolute').click()
    cy.wait(1000)
    cy.get('#pushengage-opt-in-9-close').click()
    cy.get('.lg\\:flex > :nth-child(3) > .text-sm').click()
    cy.url().should('include', 'register') // Verify that the URL includes 'register'
    cy.wait(2000)
    
    // Fill in the mandatory fields
    cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full')
      .type('')





})

})