describe('Header buttons', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check "Facebook" social link', () => {
    cy.get('.icon-facebook')
        .should('be.visible')
        .click();
  });
});
