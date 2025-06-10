import '../support/commands';
import { generateTimestampString } from '../utils/registrationHelper';

describe('Registration pop-up', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check full positive flow for registration', () => {
    const user = {
        name: 'Test',
        lastName: 'Test',
        email: generateTimestampString() + '@gmail.com',
        password: 'Password1'
    }
    cy.registration(user);
  });

  it('check text on "Registration" modal pop up', () => {
    cy.contains('button', 'Sign up').click();

    cy.contains('.modal-title', 'Registration').should('be.visible');
    cy.contains('label', 'Name').should('be.visible');
    cy.contains('label', 'Last name').should('be.visible');
    cy.contains('label', 'Email').should('be.visible');
    cy.contains('label', 'Password').should('be.visible');
    cy.contains('label', 'Re-enter password').should('be.visible');
    cy.contains('button', 'Register').should('be.visible');
  });

  it('check error message for empty "Name" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupName').click();
    cy.get('#signupName').blur();
    cy.contains('p', 'Name required').should('be.visible');
    cy.get('#signupName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for invalid "Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('123');
    cy.get('#signupName').blur();
    cy.contains('p', 'Name is invalid').should('be.visible');
    cy.get('#signupName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for minimal count of characters in "Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('D');
    cy.get('#signupName').blur();
    cy.contains('p', 'Name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for maximum count of characters in "Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('Denystesttesttesttestt');
    cy.get('#signupName').blur();
    cy.contains('p', 'Name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message when few space in "Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('Den    Test ');
    cy.get('#signupName').blur();
    cy.contains('p', 'Name is invalid').should('be.visible');
    cy.get('#signupName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for empty "Last Name" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').blur();
    cy.contains('p', 'Last name required').should('be.visible');
    cy.get('#signupLastName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for invalid "Last Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').type('123');
    cy.get('#signupLastName').blur();
    cy.contains('p', 'Last name is invalid').should('be.visible');
    cy.get('#signupLastName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for minimal count of characters in "Last Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').type('D');
    cy.get('#signupLastName').blur();
    cy.contains('p', 'Last name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupLastName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for maximum count of characters in "Last Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').type('Denystesttesttesttestt');
    cy.get('#signupLastName').blur();
    cy.contains('p', 'Last name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupLastName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message when few space in "Last Name" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').type('Den    Test ');
    cy.get('#signupLastName').blur();
    cy.contains('p', 'Last name is invalid').should('be.visible');
    cy.get('#signupLastName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for empty "Email" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupEmail').click();
    cy.get('#signupEmail').blur();
    cy.contains('p', 'Email required').should('be.visible');
    cy.get('#signupEmail')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for incorrect "Email" value', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupEmail').click();
    cy.get('#signupEmail').type('123');
    cy.get('#signupEmail').blur();
    cy.contains('p', 'Email is incorrect').should('be.visible');
    cy.get('#signupEmail')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message for empty "Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').blur();
    cy.contains('p', 'Password required').should('be.visible');
    cy.get('#signupPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message when minimum characters in "Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').type('test');
    cy.get('#signupPassword').blur();
    cy.contains('p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    cy.get('#signupPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message when maximum characters in "Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').type('testtesttesttest');
    cy.get('#signupPassword').blur();
    cy.contains('p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    cy.get('#signupPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message with all small letters in "Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').type('testtesttestt');
    cy.get('#signupPassword').blur();
    cy.contains('p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    cy.get('#signupPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error message with all big letters and without integers in "Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').type('TESTTEST');
    cy.get('#signupPassword').blur();
    cy.contains('p', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    cy.get('#signupPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error when passwords do not much with "Re-enter Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupPassword').click();
    cy.get('#signupPassword').type('Password1');
    cy.get('#signupRepeatPassword').type('Password2');
    cy.get('#signupRepeatPassword').blur();
    cy.contains('p', 'Passwords do not match').should('be.visible');
    cy.get('#signupRepeatPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check error when empty "Re-enter Password" field', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupRepeatPassword').blur();
    cy.contains('p', 'Re-enter password required').should('be.visible');
    cy.get('#signupRepeatPassword')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check that "Register" button disabled with all empty fields', () => {
    cy.contains('button', 'Sign up').click();
    cy.contains('button', 'Register').should('be.disabled');
  });

  it('check cross-button for modal pop-up', () => {
    cy.contains('button', 'Sign up').click();
    cy.get('button[aria-label="Close"]').should('be.visible');
    cy.get('button[aria-label="Close"]').click();
    cy.contains('button', 'Sign up').should('be.visible');
  });
});
