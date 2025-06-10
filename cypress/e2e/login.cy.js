import '../support/commands';
import { users } from '../fixtures/users'

describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check successfully login', () => {
    cy.login(users.validUser);
  });
});
