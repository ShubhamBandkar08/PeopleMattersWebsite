import { podcast } from "../../Pages/Podcast";
const podcastObj = new podcast();

Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing tests on React errors
    return false;
});


describe('PM Unplugged Tests', { viewportHeight: 1080, viewportWidth: 1920 }, () => {

    it('TC_01 : Validate Podcast Page Loads Successfully', () => {
        cy.visitSite();
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click() // Close the push notification popup

    })

    it('TC_02 : Validate Podcast Intro Text and Image are Present', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click() // Close the push notification popup
        cy.contains('People Matters Unplugged is your front-row seat')
        cy.get('.md\\:w-1\\/3 > .relative > .object-contain').should('be.visible') // Validate the image is present
    })

    it('TC_03 : Validate Season Blocks are Present', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click() // Close the push notification popup
        cy.contains('Season 1: The Art of the Possible').should('be.visible')
        cy.contains('Season 2: Kaleidoscope of cultures').should('be.visible')
        cy.contains('Season 3: From Inspiration to Action').should('be.visible')
    })

    it('TC_04 : Validate Episode Cards and Structure', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click()
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .first().within(() => {
                cy.get('img').should('be.visible')
                cy.contains('EP').should('exist');
                cy.contains('GO TO EPISODE').should('exist')
            })


    })

    it('TC_05 - Validate Duration Format on All Cards for All Season ', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click()

        //Click on Season 3
        podcastObj.ValidateDurationFormatOnAllCards();
        cy.wait(2000);
        // Click on Season 2
        cy.get('[href="/podcast/kaleidoscope-of-cultures"] > div > .text-gray-700').click()
        cy.wait(2000);
        podcastObj.ValidateDurationFormatOnAllCards();
        cy.wait(2000);
        // Click on Season 1
        cy.get('[href="/podcast/the-art-of-the-possible"] > div > .text-gray-700').click()
        cy.wait(2000);
        podcastObj.ValidateDurationFormatOnAllCards();


    });

    it('TC_06 - Clicks each GO TO EPISODE button and validates navigation For All Season ', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(3000);
        cy.get('#pushengage-opt-in-9-close').click()
        //Season 3
        podcastObj.ClickOnGoToEpisodeLink();
        cy.wait(3000)
        //Seeason 2
        cy.get('[href="/podcast/kaleidoscope-of-cultures"] > div > .text-gray-700').click()
        cy.wait(3000)
        podcastObj.ClickOnGoToEpisodeLink();
        cy.wait(3000)
        //Season 1
        cy.get('[href="/podcast/the-art-of-the-possible"] > div > .text-gray-700').click()
        cy.wait(3000)
        podcastObj.ClickOnGoToEpisodeLink();
    })


})
