Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests on React errors
  return false;
});
describe('Verify Sign Up Functionality', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
  it('Validate the register account, providing only the mandatory fields', () => {
    cy.visit('https://beta.peoplematters.in')
    cy.wait(2000)
    //  cy.get('.fixed > .absolute').click()
    cy.wait(1000)
    cy.get('#pushengage-opt-in-9-close').click()
    cy.wait(1000)
    cy.get('.lg\\:flex > :nth-child(2) > .text-sm').click()
    cy.wait(2000)
    cy.get('.text-primary').click() // Click on the 'Register' link
    cy.url().should('include', 'signup') // Verify that the URL includes 'register'
    cy.wait(2000)// Fill in the mandatory fields
    cy.get('.grid > :nth-child(1) > .w-full').type('shubham@gmail.com')
    cy.get('.grid > :nth-child(2) > .w-full').type('87456122416445')
    cy.get(':nth-child(3) > .w-full').type('shubham')
    cy.get('.grid > :nth-child(4) > .w-full').type('Bandkar')
    cy.get(':nth-child(7) > .flex').type('India').click() // Select country
    cy.contains('India').click() // Ensure the country is selected
    cy.wait(2000)
    cy.get('.space-y-4 > :nth-child(2) > .w-4').check() // Check the 'I agree to the terms and conditions' checkbox
    cy.wait(2000)
    cy.get('.space-y-6 > .transition-colors').click() // Click on the 'Next' button
    cy.wait(25000)//Enter OTP Manually
    cy.get('.space-y-6 > .transition-colors').click() // Click on the 'Verify' button 
    cy.wait(2000)
    cy.url().should('include', 'https://beta.peoplematters.in') // Verify that the URL includes 'welcome'
  })

  // it.only('Verify Mandatory Field Validations', () => {
  //   cy.visit('https://beta.peoplematters.in')
  //   cy.wait(2000)
  //   cy.visit('https://beta.peoplematters.in')
  //   cy.wait(2000)
  //   //  cy.get('.fixed > .absolute').click()
  //   cy.wait(1000)
  //   cy.get('#pushengage-opt-in-9-close').click()
  //   cy.wait(1000)

  //   cy.get('.lg\\:flex > :nth-child(2) > .text-sm').click()

  //   cy.wait(2000)
  //   cy.get('.text-primary').click() // Click on the 'Register' link
  //   cy.url().should('include', 'signup') // Verify that the URL includes 'register'
  //   cy.wait(2000)
  //   cy.get('.space-y-4 > :nth-child(2) > .w-4').check()
  //   cy.get('.space-y-6 > .transition-colors').click()

  // })

})