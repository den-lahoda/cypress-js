import '../support/commands';
import { users } from '../fixtures/users'

describe('Interception of API call', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login(users.validUser);
    });

    it('intercept API call on Profile page', () => {
        cy.intercept('GET', '/api/users/profile', (req) => {
            req.reply((res) => {
                res.send({
                    statusCode: 200,
                    body: {
                        status: 'ok',
                        data: {
                            name: 'Polar',
                            lastName: 'Bear',
                            email: users.validUser.email,
                            photoFilename: 'default-user.png',
                            distanceUnits: 'km',
                            currency: 'usd'
                        }
                    }
                });
            });
        }).as('getProfile');

        cy.visit('/panel/profile');

        cy.wait('@getProfile');

        cy.contains('Polar Bear').should('be.visible');
    });
});
