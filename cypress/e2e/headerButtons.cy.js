describe('Header buttons', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check that logo is visible', () => {
    cy.get('header.header').within(() => {
        cy.get('a.header_logo').should('be.visible');
    });
  });

  it('check that "Home" button is visible and not disabled', () => {
    cy.contains('a', 'Home').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that "About" button is visible and not disabled', () => {
    cy.contains('button', 'About').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that "Contacts" button is visible and not disabled', () => {
    cy.contains('button', 'Contacts').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that "Guest log in" button is visible and not disabled', () => {
    cy.contains('button', 'Guest log in').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that "Sign In" button is visible and not disabled', () => {
    cy.contains('button', 'Sign In').should('be.visible')
      .and('not.be.disabled');
  });

  it('check that "Sign up" button is visible and not disabled', () => {
    cy.contains('button', 'Sign up').should('be.visible')
      .and('not.be.disabled');
  });
});
