import { podcast } from "../../Pages/Podcast";
const podcastObj = new podcast();

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

    it.only('TC_04 : Validate Episode Cards and Structure', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(3000);
        cy.get('#pushengage-opt-in-9-close').click()
        podcastObj.ValidateEpisodeCardStructure(); // Validate Episode cards structure
        cy.wait(5000);
        // Click on Season 2
        cy.get('[href="/podcast/kaleidoscope-of-cultures"] > div > .text-gray-700').click()
        cy.wait(2000);
        podcastObj.ValidateEpisodeCardStructure();
        cy.wait(2000);
        // Click on Season 1
        cy.get('[href="/podcast/the-art-of-the-possible"] > div > .text-gray-700').click()
        cy.wait(2000);
        podcastObj.ValidateEpisodeCardStructure();

    })

    it('TC_05 - Validate Duration is visible on All Cards for All Seasons ', () => {
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


    })

    it('TC_06 - Clicks each GO TO EPISODE button and validates navigation For All Seasons ', () => {
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

    it('TC_07 - Validate All Images Have Alt Text for All Seasons', () => {
        cy.visitSite()
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
        cy.wait(5000);
        cy.url().should('include', 'podcast') // Verify that the URL includes '
        cy.wait(5000);
        cy.get('#pushengage-opt-in-9-close').click()
        //Season 3
        cy.wait(3000)
        podcastObj.CheckAltTextForPodcastImages();
        cy.wait(3000)

        //Season 2
        cy.get('[href="/podcast/kaleidoscope-of-cultures"] > div > .text-gray-700').click()
        cy.wait(3000)
        podcastObj.CheckAltTextForPodcastImages();
        cy.wait(3000)

        //Season 1
        cy.get('[href="/podcast/the-art-of-the-possible"] > div > .text-gray-700').click()
        cy.wait(3000)
        podcastObj.CheckAltTextForPodcastImages();
        cy.wait(3000)

    })

    // it('TC_08 - Validate Podcast detail page',()=>{
    //    cy.visitSite()
    //     cy.wait(5000);
    //     cy.get('.pb-8 > .hidden > :nth-child(2) > .text-sm').click() // Click on Podcast link from Top Menu
    //     cy.wait(5000);
    //     cy.url().should('include', 'podcast') // Verify that the URL includes '
    //     cy.wait(5000);
    //     cy.get('#pushengage-opt-in-9-close').click() 



    // })


})



describe('Podcast Details page ', { viewportHeight: 1080, viewportWidth: 1920 }, () => {
    beforeEach(() => {
        cy.visit("https://qa.peoplematters.in/podcast/from-inspiration-to-action/leading-with-culture")
    })

    it('TC_08 - Validate in Podcast Details page episode title is visible', () => {
        cy.contains('EP 14: Leading with Culture').should('be.visible');
    });

    it('TC_09 - Validate  in Podcast Details page host name is visible', () => {
        cy.contains('Soumitra Das').should('be.visible');
    });

    it('TC_10 - Validate in Podcast Details page episode number is displayed correctly', () => {
        cy.contains('Episode 14').should('be.visible');
    });

    it('TC_11 - Validate in Podcast Details page duration of podcast is displayed', () => {
        cy.contains('48:01').should('be.visible');
    });

    it('TC_12 - Validate in Podcast Details page Share options are displayed', () => {
        cy.get('[title="Share on Facebook"] > img').should('be.visible');
        cy.get('[title="Share on Twitter"] > img').should('be.visible');
        cy.get('[title="Share on LinkedIn"] > img').should('be.visible');
    });

    it('TC_13 - Validate in Podcast Details page episode image is displayed', () => {
        cy.get('.max-w-7xl > :nth-child(1) > .relative > .object-cover').should('be.visible');
    })

    it('TC_14 - Validate  in Podcast Details page episode description is displayed', () => {
        cy.get('.mb-14').should('not.be.empty');
    });

    it('TC_15 - Validate in Podcast Details page Spotify component has Play button working', () => {
        cy.get('iframe').should('have.attr', 'src').and('include', 'spotify');
    });

    it('TC_16 - Validate in Podcast Details page More Episodes Section load at least 4 episodes with proper content', () => {

        cy.contains('More Episodes').scrollIntoView();
        // Validate at least 4 episodes
        cy.get("[class = 'overflow-hidden group items-start gap-x-3 lg:gap-x-7 flex flex-row justify-start border-b-0.5 border-border last:border-b-0 w-full lg:py-0 py-4']").should('have.length.at.least', 4);
        cy.wait(2000);
        cy.get("[class = 'overflow-hidden group items-start gap-x-3 lg:gap-x-7 flex flex-row justify-start border-b-0.5 border-border last:border-b-0 w-full lg:py-0 py-4']").each(($el) => {
            cy.wrap($el).contains('EP').should('be.visible'); // Validate episode number
            cy.wrap($el).find('img').should('be.visible');    // Validate episode image

        })
    })

    it('TC_17 - Validate in Podcast Details page More Reads Section load at least 4 episodes with proper content', () => {

        cy.contains('More Reads').scrollIntoView();
        // Validate at least 4 episodes
        cy.get("[class = 'overflow-hidden group gap-x-3 lg:gap-x-7 flex flex-row-reverse items-start justify-start border-b-0.5 border-border last:border-b-0 w-full lg:py-0 py-4']").should('have.length.at.least', 4);
        cy.wait(2000);
        cy.get("[class = 'overflow-hidden group gap-x-3 lg:gap-x-7 flex flex-row-reverse items-start justify-start border-b-0.5 border-border last:border-b-0 w-full lg:py-0 py-4']").each(($el) => {
            cy.wrap($el).contains('EP').should('be.visible'); // Validate episode number
            cy.wrap($el).find('img').should('be.visible');    // Validate episode image

        })
    })

})

