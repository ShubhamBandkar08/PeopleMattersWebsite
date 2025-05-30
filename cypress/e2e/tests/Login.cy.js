// filepath: c:\Users\shubh\Desktop\PeopleMattersWebsite\cypress\e2e\tests\Login.cy.js
describe('Login Tests', () => {
    it("should log in with valid credentials",{
        viewportHeight: 1080,
        viewportWidth: 1920
    }, () => {
        cy.visit("https://beta.peoplematters.in", {
            auth: {
                username: "pmpl-user1",
                password: "Pmpl@2025!"
            }
        })

        cy.get('.fixed > .absolute').click() //click on skip button
        cy.get('.hidden.gap-4 > .hidden > :nth-child(2) > .text-sm').click() // Click on the login button
        cy.get('.space-y-4 > :nth-child(1) > .relative > .w-full').type('shubhambandkar08@gmail.com')//Enter email
        cy.wait(3000) //Wait for 1 second
        cy.get('.space-y-4 > .transition-colors').click({force:true}) //Click on login button
       

    })
   
    it.only("Verify Sign-up functionality",{
        viewportHeight: 1080,
        viewportWidth: 1920
    }, () => {
        cy.visit("https://beta.peoplematters.in", {
            auth: {
                username: "pmpl-user1",
                password: "Pmpl@2025!"
            }
        })

        cy.get('.fixed > .absolute').click() //click on skip button
        cy.get('.hidden.gap-4 > .hidden > :nth-child(2) > .text-sm').click()
        cy.get('.text-primary').click() //Click on sign up button
        cy.wait(3000) //Wait for 3 seconds
        cy.get('#pushengage-opt-in-9-close').click()
        cy.get('.grid > :nth-child(1) > .w-full').type('TestUser@gmail.com') //Enter name
        cy.get('.grid > :nth-child(2) > .w-full').type('9878787878')//Enter phone number
        cy.get(':nth-child(3) > .w-full').type('Tuser')
        cy.get('.grid > :nth-child(4) > .w-full').type('user')
        cy.get('.react-select__indicator').click()
        cy.wait(2000) //Wait for 2 seconds
        cy.get('#react-select-2-option-3').click() //Select the country
       cy.get(':nth-child(2) > .w-4').check()
       cy.get('.transition-colors').click({force:true}) //Click on sign up button
       cy.wait(20000) // Enter OTP Manually 
       cy.get('.space-y-6 > .w-full').click() //Click on verify button


})
})
