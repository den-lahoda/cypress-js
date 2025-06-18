import 'cypress-plugin-api';

describe('API tests using cypress-plugin-api', () => {

  it('GET: Car brands list', () => {
    cy.api(`/api/cars/brands`).its('status').should('eq', 200);
  });

  it('POST: Sign in existing user', () => {
    cy.api({
      method: 'POST',
      url: `/api/auth/signin`,
      body: {
        email: 'dentest@gmail.com',
        password: 'Password1'
      }
    }).its('status').should('eq', 200);
  });

  it('PUT: Update settings after login', () => {
    cy.api({
      method: 'POST',
      url: `/api/auth/signin`,
      body: {
        email: 'dentest@gmail.com',
        password: 'Password1'
      }
    }).then((res) => {
      const sid = res.headers['set-cookie']
        .find(cookie => cookie.startsWith('sid='))
        .split(';')[0];

      cy.api({
        method: 'PUT',
        url: `/api/users/settings`,
        headers: {
          Cookie: sid
        },
        body: {
          currency: 'uah',
          distanceUnits: 'km'
        }
      }).its('status').should('eq', 200);
    });
  });
});
