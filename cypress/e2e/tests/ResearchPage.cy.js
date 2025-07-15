describe('Validate Research Page', { viewportHeight: 1080, viewportWidth: 1920 }, () => {

    beforeEach(() => {
        cy.visitSite();
    })
    it("TC_01:Validate Research Page Loads Successfully", () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research').then((url) => {
            cy.request(url).its('status').should('eq', 200); // Check status code of current page
        }); // Verify that the URL includes 'research'

        cy.get('#pushengage-opt-in-9-close').click(); // Close the push notification popup
        cy.get('.text-5xl').should('be.visible').and('contain', 'Research'); // Verify the page title
    })

    it(' TC_02: Validate segmented toggle button navigation works correctly', () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research')
        cy.get('[href="#People-Matters-Research"]').click()
        cy.wait(5000);
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .invoke('text').should('eq', 'People Matters Research')
        cy.wait(1000)
        cy.get('[href="#Co-Branded-Research"]').scrollIntoView().click()
        cy.wait(5000);
        cy.get('#Co-Branded-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .invoke('text').should('eq', 'Co-Branded Research')
        cy.wait(1000)

    })

    it('TC_03: Validate each section label is visible', () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(1000);

        cy.get('#POPULAR-PEOPLE-MATTERS-RESEARCH > :nth-child(1) > .flex-col > .flex > .text-\\[10px\\]').scrollIntoView()
            .should('be.visible')
        cy.wait(3000);
        cy.get('#Co-Branded-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]').scrollIntoView().should('be.visible')
        cy.wait(3000);
        cy.get('#Popular-Co-Branded-Research > :nth-child(1) > .flex-col > .flex > .text-\\[10px\\]').scrollIntoView()
            .should('be.visible')


    })

    it('TC_04: Validate Description text in People Matters Research section is visible', () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(1000);
        cy.get('#People-Matters-Research > .gap-6 > .font-inter').should('be.visible').and('not.be.empty');
    })

    it("TC-05: Validate in People Matters Research section each artcle image is visible", () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(1000);
        cy.get('#People-Matters-Research')                  
            .find('img')                                    
            .each($img => {
                
                cy.wrap($img).scrollIntoView().should('be.visible');

            })
    });

    it("TC-06: Validate All Article Coantain Category and author name", () => {

         cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);

})



})

