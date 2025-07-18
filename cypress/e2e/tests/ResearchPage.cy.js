describe('Validate Research Page', { viewportHeight: 1080, viewportWidth: 1920 }, () => {

    const select = {
        FeaturedCard: "[class='group cursor-pointer']",
        rightsideCard: "[class='overflow-hidden group items-start gap-x-3 lg:gap-x-7 flex flex-row justify-start border-b-0.5 border-border last:border-b-0 w-full h-fit pb-3 lg:pt-0 pt-4']",
        section1: "[id='People-Matters-Research']",
        category1: "[class='text-inkBlack font-medium truncate min-w-0 whitespace-nowrap']",
        category2: "[class='text-xs font-medium font-inter truncate min-w-0']",
        authorName1: "[class='text-inkBlack/60 font-normal line-clamp-1 whitespace-nowrap']",
        authorName2: "[class='text-inactiveGray font-medium text-xs font-inter line-clamp-1']",
        LeftArticleTitle: "[class='font-normal text-base lg:text-xl line-clamp-4 leading-5']",
        rigtsectionImg: "[class='w-32 h-24 lg:w-40 lg:h-24 flex-shrink-0 relative']",
        lebel: "[class='text-[10px] uppercase tracking-[0.4em] lg:px-5 px-4 md:font-bold font-medium text-left bg-foreground text-white py-2.5 rounded-b ']",
        leftSection: ".pb-10 > :nth-child(1) > :nth-child(2) > .lg\\:flex-row",
        section2leftCard: "[class='overflow-hidden group items-start gap-x-3 lg:gap-x-7 flex flex-row justify-start border-b-0.5 border-border last:border-b-0 w-full lg:py-0 py-4']",
        category3: "[class='text-inkBlack text-xs font-medium font-inter truncate min-w-0']",
        section3: '#Co-Branded-Research > .grid-cols-1',
        section4: ':nth-child(4) > .lg\\:flex-row'
    }
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

    it('TC_02: Validate segmented toggle button navigation works correctly', () => {
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
        cy.wait(5000);

        cy.get(select.lebel).each(($el) => {
            cy.wrap($el).scrollIntoView({ duration: 2000 }).should('be.visible').and('not.be.empty');
        })

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

    it("TC_05: Validate in People Matters Research section Article Coantain Category and author name and image", () => {

        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);
        cy.get(select.section1).find(select.FeaturedCard).each(($card) => {
            // your assertions or actions here
            cy.wrap($card).find(select.category1).should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName1).should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })
        //right side card validation
        cy.get(select.section1).find(select.rightsideCard).each(($card) => {
            cy.wrap($card).find(select.category2).should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName2).should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })

    })

    it("TC_06: Validate in People Matters Research section all articles are naviagte correctly", () => {

        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(5000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);
        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(5000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.wait(3000)
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);
        cy.get(select.section1).find(select.FeaturedCard).each(($card) => {
            // your assertions or actions here

            cy.wrap($card).find('img').should('be.visible').click()
            cy.wait(10000);
            cy.go('back'); // Ensure the image is visible 
        })
        //right side card validation
        cy.wait(5000);
        cy.get('#People-Matters-Research > .grid-cols-1 > .grid > :nth-child(2) > .w-32 > .relative > .object-cover').click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible
        cy.wait(5000);
        cy.get('#People-Matters-Research > .grid-cols-1 > .grid > :nth-child(2) > .w-32 > .relative > .object-cover').click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible
        cy.wait(5000);
        cy.get('#People-Matters-Research > .grid-cols-1 > .grid > :nth-child(3) > .w-32 > .relative > .object-cover').click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible

        // Ensure the image is visible   


    })

    it("TC_07:  Validate in POPULAR PEOPLE MATTERS RESEARCH RESOURCES section Article contain Category and author name and image", () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);

        cy.get(select.leftSection).find(select.section2leftCard).each(($card) => {
            cy.wrap($card).find(select.category3).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName2).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })

    })

    it("TC_08: Validate in POPULAR PEOPLE MATTERS RESEARCH RESOURCES section all articles are naviagte correctly", () => {
        //cy.visit('https://www.peoplematters.in/');
        cy.wait(3000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.wait(5000);
        cy.get(select.leftSection).find(select.section2leftCard).then(($card) => {
            const count = $card.length
            for (let i = 0; i < count; i++) {
                cy.get(select.leftSection).find(select.section2leftCard)
                    .find('img')
                    .eq(i).scrollIntoView()
                    .click({ force: true });
                cy.url().should('include', '/article/')

                cy.wait(3000);
                cy.go('back');
                cy.wait(3000);
            }
        })

    })

    it('TC_09: Validate in Co-Branded Research section Description is visible', () => {
        cy.wait(4000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(4000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#Co-Branded-Research > .gap-6 > .font-inter').scrollIntoView({ duration: 2000 }).should('be.visible').and('not.be.empty');
    })

    it("TC_10: Validate in Co-Branded Research section Article Coantain Category and author name and image", () => {

        cy.wait(3000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(3000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.wait(5000);
        //cy.get('#Co-Branded-Research > .grid-cols-1').scrollIntoView({duration:2000})
        cy.get(select.section3).scrollIntoView({ duration: 2000 })
        cy.wait(5000)
        cy.get(select.section3).find(select.FeaturedCard).each(($card) => {
            // your assertions or actions here
            cy.wrap($card).find(select.category1).should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName1).should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })
        //right side card validation
        cy.get(select.section3).find(select.rightsideCard).each(($card) => {
            cy.wrap($card).find(select.category2).should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName2).should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })

    })

    it("TC_11: Validate in Co-Branded Research section all articles are naviagte correctly", () => {

        cy.wait(5000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(5000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);
        cy.get(select.section3).scrollIntoView({ duration: 2000 })
        cy.get(select.section3).find(select.FeaturedCard).each(($card) => {
            // your assertions or actions here

            cy.wrap($card).find('img').should('be.visible').click()
            cy.wait(10000);
            cy.go('back'); // Ensure the image is visible 
        })
        //right side card validation
        cy.wait(3000)
        cy.get('#Co-Branded-Research > .grid-cols-1 > .grid > :nth-child(1)').click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible

        cy.get('#Co-Branded-Research > .grid-cols-1 > .grid > :nth-child(2)').scrollIntoView({ duration: 2000 }).click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible

        cy.get('#Co-Branded-Research > .grid-cols-1 > .grid > :nth-child(3)').scrollIntoView({ duration: 2000 }).click()
        cy.wait(5000);
        cy.go('back'); // Ensure the image is visible

        // Ensure the image is visible   


    })

    it("TC_12: Validate in Popular Co-Branded Research section Article contain Category and author name and image", () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);

        cy.get(select.leftSection).find(select.section2leftCard).each(($card) => {
            cy.wrap($card).find(select.category3).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName2).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })

    })

    it("TC_13:  Validate in Popular Co-Branded Research section Article contain Category and author name and image", () => {
        cy.wait(10000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.get('#People-Matters-Research > .border-t-0\\.5 > .flex > .text-\\[10px\\]')
            .should('be.visible')
        cy.wait(2000);
        cy.get(select.section4).scrollIntoView({ duration: 3000 })
        cy.wait(2000)
        cy.get(select.section4).find(select.section2leftCard).each(($card) => {
            cy.wrap($card).find(select.category3).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find(select.authorName2).scrollIntoView().should('be.visible').and('not.be.empty');
            cy.wrap($card).find('img').should('be.visible'); // Ensure the image is visible 
        })

    })

    it("TC_14: Validate in POPULAR PEOPLE MATTERS RESEARCH RESOURCES section all articles are naviagte correctly", () => {
        //cy.visit('https://www.peoplematters.in/');
        cy.wait(3000);
        cy.get('.pb-8 > .hidden > :nth-child(3) > .text-sm').click(); // Click on Research link from Top Menu
        cy.wait(10000); // Wait for the page to load
        cy.url().should('include', 'research');
        cy.wait(5000);
        cy.get(select.section4).find(select.section2leftCard).then(($card) => {
            const count = $card.length
            for (let i = 0; i < count; i++) {
                cy.get(select.section4).find(select.section2leftCard)
                    .find('img')
                    .eq(i).scrollIntoView()
                    .click({ force: true });
                cy.wait(10000)
                cy.url().should('include', '/article/')

                cy.wait(3000);
                cy.go('back');
                cy.wait(3000);
            }
        })

    })



})









