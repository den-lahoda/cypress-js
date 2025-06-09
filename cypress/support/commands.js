Cypress.Commands.add('registration', ({ name, lastName, email, password }) => {
  cy.contains('button', 'Sign up').click();

  cy.contains('.modal-title', 'Registration').should('be.visible');

  cy.get('#signupName').type(name);
  cy.get('#signupLastName').type(lastName);
  cy.get('#signupEmail').type(email);
  cy.get('#signupPassword').type(password);
  cy.get('#signupRepeatPassword').type(password);

  cy.contains('button', 'Register').click();

  cy.contains('h1', 'Garage').should('be.visible');
});

Cypress.Commands.add('login', ({ email, password }) => {
  cy.contains('button', 'Sign In').click();

  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });

  cy.contains('button', 'Login').click();

  cy.contains('h1', 'Garage').should('be.visible');
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false;

    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});