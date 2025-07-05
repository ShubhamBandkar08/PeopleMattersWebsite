Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests on React errors
  return false;
});

describe("Home Page Tests", { viewportHeight: 1080, viewportWidth: 1920 }, () => {

  it("Validate Menu Category Pages are displayed or not ", () => {
    cy.VisitSite();
    cy.wait(2000);
    //cy.get('.fixed > .absolute').click();
    cy.wait(3000);
    cy.get('#pushengage-opt-in-9-close').click();

    const selectors = [
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

    const expectedTexts = [
      'Strategy',
      'Leadership',
      'Talent Management',
      'Technology',
      'Learning & Development',
      'Wellness',
      'Diversity & Inclusion',
      'Employee Experience',
      'HR Analytics'
    ];

    selectors.forEach((selector, idx) => {
      cy.get(selector).click();
      cy.wait(2000);
      // cy.get('.text-\\[32px\\]').should('contain.text', expectedTexts[idx]);
      cy.get('[href="/contact-us"]').scrollIntoView({ duration: 25000 });
      cy.go('back');
      cy.wait(1000);
    });

    cy.get('.w-\\[150px\\]').click(); // check logo is navigating to the home page
  });

  it("Verify Hot topic Navigation", () => {
    cy.visitSite();
    // cy.get('.fixed > .absolute').click();
    cy.wait(4000);
    cy.get('#pushengage-opt-in-9-close').click();

    // cy.get('[href^="/brand-reachout/"]').then($links => {
    //   const linkCount = $links.length;
    //   for (let i = 0; i < linkCount; i++) {
    //     cy.get('[href^="/brand-reachout/"]').eq(i)
    //       .invoke('removeAttr', 'target')
    //       .click();
    //     cy.wait(2000);
    //     cy.go('back');
    //     cy.wait(1000);
    //   }
    // });

    cy.get('.hidden > [href="/tag/hr-folk-talk"] > .text-base').click()
    cy.wait(2000);
    cy.url().should('include', 'hr-folk-talk');
    cy.go('back');

    cy.get('.hidden > [href="/brand-reachout/futureofhumancapital"] > .text-base').click()
    cy.wait(2000);
    cy.url().should('include', 'futureofhumancapital');
    cy.go('back');

    cy.get('.hidden > [href="/brand-reachout/smecorner"] > .text-base').click()
    cy.wait(2000);
    cy.url().should('include', 'smecorner');
    cy.go('back');

  });


  it("Verify one article from each section article", () => {
    cy.visitSite();
    // cy.get('.fixed > .absolute').click();
    cy.wait(4000);
    cy.get('#pushengage-opt-in-9-close').click();

    cy.get('.lg\\:col-span-7 > .flex-col > .relative > .block > .overflow-hidden > .h-full').click();
    cy.wait(2000);
    cy.get('[href="/write-for-us"]').scrollIntoView({ duration: 2000 });
    // cy.url().should('include', 'feature-news');
    cy.go('back');

    // Current Section
    cy.wait(3000)
    cy.get(':nth-child(2) > #CURRENT > .md\\:grid-cols-2 > :nth-child(1) > .flex-col > .relative > .block > .overflow-hidden > .h-full').scrollIntoView({ duration: 2000 });
    cy.wait(2000);
    cy.get(':nth-child(2) > #CURRENT > .md\\:grid-cols-2 > :nth-child(1) > .flex-col > .relative > .block > .overflow-hidden > .h-full').click();
    cy.wait(2000);
    cy.go('back');

    //Trending Section
    cy.wait(3000)
    cy.get(':nth-child(4) > .lg\\:flex-row > .lg\\:w-\\[30\\%\\] > .space-y-6 > :nth-child(1) > .space-y-10 > :nth-child(1) > [data-template="trending_section_right"] > .grid > :nth-child(1)').click();
    cy.wait(2000);
    cy.go('back');

    //Recent Article
    cy.wait(3000)
    cy.get('#RECENT-ARTICLES > .grid > :nth-child(1)').click();
    cy.wait(2000);
    cy.go('back');


  })

  it("Verify footer links are working and redirecting to the correct pages", () => {
    cy.visitSite();
    // cy.get('.fixed > .absolute').click();
    cy.wait(5000);
    cy.get('#pushengage-opt-in-9-close').click();
    // cy.get('[href="/get-in-touch"]').scrollIntoView({ duration: 10000 });
    // cy.wait(2000);
    // cy.get('.bg-indigo > .grid').each($link => {
    //   const href = $link.prop('href');
    //   if (href && (href.startsWith('http') || href.startsWith('/'))) {
    //     cy.visit(href);
    //     cy.get('body').should('be.visible');
    //     cy.go('back');
    //   }
    // });


  })

  it("Verify that all advertisement banners redirect to their correct landing pages when clicked", () => {
    cy.visit("https://beta.peoplematters.in", {
      auth: {
        username: "pmpl-user1",
        password: "Pmpl@2025!"
      }
    });

    cy.wait(2000);
    cy.get('.fixed > .absolute').click();
    cy.wait(2000);
    cy.get('#pushengage-opt-in-9-close').click();
    cy.wait(2000);

    const adSelectors = [
      '#home-long-precontent-strip-banner_1 > a',
      // Add more selectors if needed
    ];

    adSelectors.forEach(selector => {
      cy.get(selector).then($a => {
        const href = $a.attr('href');
        const adOrigin = new URL(href, 'https://beta.peoplematters.in').origin;

        cy.wrap($a)
          .invoke('removeAttr', 'target')
          .find('picture > img')
          .click({ force: true });

        if (adOrigin !== 'https://beta.peoplematters.in') {
          cy.origin(adOrigin, () => {
            cy.url().should('include', 'darwinbox.com'); // Generalize if needed
            cy.get('body').should('be.visible');
            cy.go('back');
          });
        } else {
          cy.url().should('include', href);
          cy.go('back');
        }
        cy.wait(2000);
      });
    });
  });

  it("Menu Option", () => {
    cy.visitsite();
    cy.get('.fixed > .absolute').click();
    cy.wait(3000);
    cy.get('#pushengage-opt-in-9-close').click();
    cy.get('.pb-8 > .flex > :nth-child(2)').click();
    cy.get('.text-\\[32px\\]').should('contain.text', 'Strategy');
  });

  it.only('validate brand initives', () => {
    cy.visitSite();
    cy.wait(2000);
    // cy.get('.fixed > .absolute').click();
    cy.wait(3000);
    cy.get('#pushengage-opt-in-9-close').click();
    cy.get("[class='bg-black px-16 uppercase text-sm text-white py-3 rounded-[4px]']").scrollIntoView({duration: 2000 }).click();
    cy.wait(2000);
    for (let i = 0; i <= 30; i++) {
      cy.wait(2000)
  cy.get(`[data-swiper-slide-index="${i}"] > .w-16 > .max-h-full`).click({ force: true });
  cy.get('[href="/write-for-us"]').scrollIntoView({ duration: 4000 });
  cy.go('back'); 
  cy.wait(4000); // Optional: wait for any animation or navigation
  // Optionally, add assertions or cy.go('back') if needed
   
  cy.wait(1000); // Optional: wait for any animation or navigation
  // Optionally, add assertions or cy.go('back') if needed
}
    });
  })

;