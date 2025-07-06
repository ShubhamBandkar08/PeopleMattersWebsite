
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on React errors
    return false;
});


describe('Event Page Tests', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
    
    it('Validate Saved Event is displayed in "My account Event page"', () => {

        cy.visitSite();
        cy.wait(2000);
        //   cy.get('#pushengage-opt-in-9-close').click()
        cy.get('.lg\\:flex > :nth-child(2) > .text-sm').click()
        cy.url().should('include', 'login')// Verify that the URL includes 'login'
        cy.wait(2000)
        cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full')
            .type('Shubhambandkar7@gmail.com')// Enter an invalid email
        cy.get('.space-y-4 > .transition-colors').click()
        cy.wait(25000) // Enter OTP Maually
        cy.get('.space-y-6.max-w-xs > .relative > .flex-1 > .space-y-6 > .w-full').click()

        cy.get('.pb-8 > .hidden > :nth-child(1) > .text-sm').click()// Click on Event link from Top Menu
        cy.wait(2000);
        cy.get(':nth-child(1) > .lg\\:flex-row > .lg\\:px-2 > .flex-col > :nth-child(1) > .text-\\[32px\\]').click()
        cy.get("[class='lucide lucide-bookmark w-10 h-10']").click()
        cy.wait(3000)
        cy.get('.lg\\:flex > :nth-child(2) > .relative > .flex').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .hover\\:text-orange').click()
        cy.wait(5000)
        cy.get('.justify-start > .bg-black').click()



    })
    
    it.only('Should redirect to login when saving event, then return to event page after login', () => {


        cy.visitSite();
        cy.wait(2000);
        cy.get('.pb-8 > .hidden > :nth-child(1) > .text-sm').click()//Click on Event link from Top Menu
        cy.wait(2000);
        cy.url().should('include', 'events')// Verify that the URL includes 'events'
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click()
        cy.get('.infinite-scroll-component > :nth-child(1) > .lg\\:flex-row').click()
        cy.get('.mb-8 > .text-4xl').invoke('text').then((eventNameBefore) => {

            cy.get("[class='lucide lucide-bookmark w-10 h-10']").click()
            cy.url().should('include', 'signup') // Verify that the URL includes 'signup'
            cy.wait(2000)
            cy.get('.mt-6 > :nth-child(2) > .text-orange').click()
            cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('shubhambandkar7@gmail.com')
            cy.get('.space-y-4 > .transition-colors').click()
            cy.wait(25000) // Enter OTP Maually        
            // Add further assertions or actions here if needed, or remove this line if not required
            cy.get('.space-y-6.max-w-xs > .relative > .flex-1 > .space-y-6 > .w-full').click()
            cy.get('.mb-8 > .text-4xl').invoke('text').then((eventNameAfter) => {
                expect(eventNameAfter.trim()).to.eq(eventNameBefore.trim())
            })
            
        })
        cy.wait(5000) // Verify that the event name remains the same after login
               cy.get("[class='lucide lucide-bookmark w-10 h-10']").click()
               // cy.wait(5000)
                // cy.get('.lg\\:flex > :nth-child(2) > .relative > .flex').click()
                // cy.wait(5000)
             //  cy.get('.w-\\[218px\\]').scrollTo('top')
             cy.wait(3000)
               cy.get('.space-x-6 > li > :nth-child(1) > .relative > .flex').click()
                cy.get('.right-0 > .relative > .py-4').contains('Events').click()
                cy.wait(5000)
                cy.get('.justify-start > .bg-black').click()

    })
})
