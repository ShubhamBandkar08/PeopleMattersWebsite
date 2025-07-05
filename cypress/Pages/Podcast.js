export class podcast {


    ClickOnGoToEpisodeLink() {
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
            .then((EpCard) => {
                const totalCard = EpCard.length;

                for (let i = 0; i < totalCard; i++) {
                    cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
                        .eq(i).contains('GO TO EPISODE').click();
                    cy.wait(2000);
                    cy.url().should('include', '/podcast/');
                    cy.wait(2000);
                    cy.go('back');

                }
            })
    }

    ValidateDurationFormatOnAllCards(){
        cy.get("[class='border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg']")
        .each(($el) => {
            cy.wrap($el).contains(/\d{2}:\d{2}/).should('exist');
        });
    }
}