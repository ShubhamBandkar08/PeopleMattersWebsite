Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on React errors
    return false;
});


describe('Login Functionality', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
    it('Should display an error message on the login popup when login fails', () => {

        cy.visit('https://beta.peoplematters.in')
        cy.wait(2000)
        cy.get('.fixed > .absolute').click()
        cy.wait(1000)
        cy.get('#pushengage-opt-in-9-close').click()
        cy.get('.lg\\:flex > :nth-child(2) > .text-sm').click()
        cy.url().should('include', 'login')// Verify that the URL includes 'login'
        cy.wait(2000)
        cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full')
            .type('Shubhambandkar71@gmail.com')// Enter an invalid email
        cy.get('.space-y-4 > .transition-colors').click()
            cy.wait(1000)
        cy.get('.go3958317564').should('be.visible')
    })

    it.only('Should successfully log in with valid credentials',() => {   
        cy.visitsite()
        cy.wait(2000)
       // cy.get('.fixed > .absolute').click()
        cy.wait(3000)
     //   cy.get('#pushengage-opt-in-9-close').click()
        cy.get('.lg\\:flex > :nth-child(2) > .text-sm').click()
        cy.url().should('include', 'login')// Verify that the URL includes 'login'
        cy.wait(2000)
        cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full')
            .type('Shubhambandkar7@gmail.com')// Enter an invalid email
        cy.get('.space-y-4 > .transition-colors').click()
        cy.wait(25000) // Enter OTP Maually
        cy.get('.space-y-6.max-w-xs > .relative > .flex-1 > .space-y-6 > .w-full').click()
        cy.url().should('include', 'https://beta.peoplematters.in/') // Verify that the URL includes 'dashboard'
        
    })







    //cy.get(':nth-child(2) > .relative > .flex > .lucide-chevron-down > path')
})
