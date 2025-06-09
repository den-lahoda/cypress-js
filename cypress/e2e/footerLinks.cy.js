describe('Footer links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check "Facebook" social link', () => {
    cy.get('.icon-facebook')
        .should('be.visible')
        .click();
  });

  it('check "Telegram" social link', () => {
    cy.get('.icon-telegram')
        .should('be.visible')
        .click();
  });

  it('check "Youtube" social link', () => {
    cy.get('.icon-youtube')
        .should('be.visible')
        .click();
  });

  it('check "Instagram" social link', () => {
    cy.get('.icon-instagram')
        .should('be.visible')
        .click();
  });

  it('check "Linkedin" social link', () => {
    cy.get('.icon-linkedin')
        .should('be.visible')
        .click();
  });

  it('check that footer has link to "ithillel.ua"', () => {
    cy.contains('a', 'ithillel.ua').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that footer has email address', () => {
    cy.contains('a', 'support@ithillel.ua').should('be.visible')
      .and('not.be.disabled');
  });
});
