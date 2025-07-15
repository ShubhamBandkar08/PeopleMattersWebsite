export class podcast {


    ClickOnGoToEpisodeLink() {
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .then((EpCard) => {
                const totalCard = EpCard.length;

                for (let i = 0; i < totalCard; i++) {
                    cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
                        .eq(i).contains('GO TO EPISODE').scrollIntoView({ duration: 2000 }).click();
                    cy.wait(2000);
                    cy.url().should('include', '/podcast/');
                    cy.wait(2000);
                    cy.go('back');

                }
            })
    }

    ValidateEpisodeCardStructure() {
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .each(($card) => {
                cy.wrap($card).scrollIntoView({ duration: 2000 });
                cy.wait(8000)// Scrolls to the card
                cy.wrap($card).within(() => {
                    cy.get("[class='text-lg md:text-xl font-meidum mb-4 text-gray-900 leading-tight line-clamp-2']")
                        .should('be.visible')
                        .invoke('text')
                        .then((txt) => {
                            expect(txt.includes('EP') || txt.includes('Trailer')).to.be.true;
                        });// Validate Episode title is present
                        cy.wait(2000);
                    cy.get('img').should('be.visible'); // Validate image is present
                    cy.wait(2000);
                    cy.contains('GO TO EPISODE').should('exist'); // Validate button is present
                    cy.wait(2000);
                });
            });
    }

    ValidateDurationFormatOnAllCards() {
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .each(($el) => {
                cy.wait(1000);
                cy.wrap($el).scrollIntoView({ duration: 200 }); // Scrolls to the card
                cy.wait(2000);
                cy.wrap($el).contains(/\d{2}:\d{2}/).should('exist');
            });
    }


    CheckAltTextForPodcastImages() {
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .each(($card) => {
                cy.wrap($card).scrollIntoView({ duration: 2000 }); // Scrolls to the card
                cy.wait(2000);
                cy.wrap($card).find('img').should('have.attr', 'alt').and('not.be.empty');
            });
    }
}