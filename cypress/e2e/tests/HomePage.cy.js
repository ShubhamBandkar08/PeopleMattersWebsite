describe("Home Page Tests",{viewportHeight:1080,viewportWidth:1920 }, () => {
    it("Validate Menu Category Pages are displayed or not ",()=>{

        cy.visit("https://beta.peoplematters.in", {
            auth: {
                username: "pmpl-user1",
                password: "Pmpl@2025!"
            }
        })
        cy.get('.fixed > .absolute').click() //click on skip button
        cy.wait(3000)
        cy.get('#pushengage-opt-in-9-close').click()// click on notification
       // cy.scrollTo('top') // Scroll to the top of the page
        //Click left menu category
        const selectors = [
            '.pb-8 > .flex > :nth-child(1) > .text-sm',
            '.pb-8 > .flex > :nth-child(2)',
            '.pb-8 > .flex > :nth-child(3) > .text-sm',
            '.pb-8 > .flex > :nth-child(4) > .text-sm',
            '.pb-8 > .flex > :nth-child(5) > .text-sm',
            '.pb-8 > .flex > :nth-child(6) > .text-sm',
            '.pb-8 > .hidden > :nth-child(1) > .text-sm',
            '.pb-8 > .hidden > :nth-child(2)',
            '.hidden > :nth-child(3) > .text-sm',
            '.hidden > :nth-child(4) > .text-sm'

        ];

        selectors.forEach(selector =>{
            cy.get(selector).click()
            cy.get('[href="/get-in-touch"]').scrollIntoView({ duration: 10000 }) // Scroll to the "Get in Touch" link
            cy.wait(2000) // Wait for 2 seconds to load the page

        })
        cy.get('.w-\\[150px\\]').click()// check logo is navigating to the home page

        // Validate Hot topics Page Navigation


    })
    
    it("Verify Hot topic Navigation",()=>{

         cy.visit("https://beta.peoplematters.in", {
            auth: {
                username: "pmpl-user1",
                password: "Pmpl@2025!"
            }
        })
        cy.get('.fixed > .absolute').click() //click on skip button
        cy.wait(3000)
        cy.get('#pushengage-opt-in-9-close').click()

        cy.get('[href="/brand-reachout/lets-talk-talent"] > :nth-child(1) > .object-contain').click()
         cy.wait(2000)
        cy.go('back')
       // Wait for 2 seconds to load the page
        cy.get('[href="/brand-reachout/get-set-learn"] > :nth-child(2) > .text-base').click()   
        cy.wait(2000)
        cy.go('back')
         // Wait for 2 seconds to load the page
        cy.get('[href="/brand-reachout/WellnessFirstWithMediBuddy"] > :nth-child(2) > .text-base').click()
        cy.wait(2000) // Wait for 2 seconds to load the page
        cy.go('back')

    })


    it("Validate FEATURED NEWS Navigation",()=>{




    })



})