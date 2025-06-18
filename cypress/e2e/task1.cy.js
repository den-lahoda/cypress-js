describe('API Tests', () => {

    it('POST: Register a new user', () => {
        cy.request('POST', '/api/auth/signup', {
            name: 'Test',
            lastName: 'User',
            email: `testuser_${Date.now()}@example.com`,
            password: 'Password1',
            repeatPassword: 'Password1'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.status).to.eq('ok');

            const userDataResp = response.body.data;

            expect(userDataResp).to.have.property('userId').and.to.be.a('number');
        });
    });

    it('POST: Login to user after registration', () => {
        let email = `testuser_${Date.now()}@example.com`;
        cy.request('POST', '/api/auth/signup', {
            name: 'Test',
            lastName: 'User',
            email: email,
            password: 'Password1',
            repeatPassword: 'Password1'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.status).to.eq('ok');

            const userDataResp = response.body.data;

            expect(userDataResp).to.have.property('userId').and.to.be.a('number');
        });

        cy.request('POST', '/api/auth/signin', {
            email: email,
            password: 'Password1',
            remember: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');

            const userDataResp = response.body.data;

            expect(userDataResp).to.have.property('userId').and.to.be.a('number');
        })
    });

    it('GET: Get car brands', () => {
        cy.request('GET', '/api/cars/brands', {}).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');

            expect(response.body.data).to.deep.equal([
                { id: 1, title: 'Audi', logoFilename: 'audi.png' },
                { id: 2, title: 'BMW', logoFilename: 'bmw.png' },
                { id: 3, title: 'Ford', logoFilename: 'ford.png' },
                { id: 4, title: 'Porsche', logoFilename: 'porsche.png' },
                { id: 5, title: 'Fiat', logoFilename: 'fiat.png' }
            ]);
        });
    });

    it('PUT: Register, gets sid cookie and updates settings', () => {
        let email = `testuser_${Date.now()}@example.com`;
        cy.request('POST', '/api/auth/signup', {
            name: 'Test',
            lastName: 'User',
            email: email,
            password: 'Password1',
            repeatPassword: 'Password1'
        }).then((loginResp) => {
            expect(loginResp.status).to.eq(201);
            expect(loginResp.body.status).to.eq('ok');

            const sidCookie = loginResp.headers['set-cookie']
                .find(c => c.startsWith('sid='))
                .split(';')[0];

            const cookieHeader = {
                Cookie: sidCookie
            };

            cy.request({
                method: 'PUT',
                url: '/api/users/settings',
                headers: {
                    ...cookieHeader,
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: {
                    currency: 'uah',
                    distanceUnits: 'km'
                }
            }).then((updateResp) => {
                expect(updateResp.status).to.eq(200);
                expect(updateResp.body.status).to.eq('ok');
                expect(updateResp.body.data.currency).to.eq('uah');
            });
        });
    });

    it('DELETE: Register and delete user', () => {
        let email = `testuser_${Date.now()}@example.com`;
        cy.request('POST', '/api/auth/signup', {
            name: 'Test',
            lastName: 'User',
            email: email,
            password: 'Password1',
            repeatPassword: 'Password1'
        }).then((loginResp) => {
            expect(loginResp.status).to.eq(201);
            expect(loginResp.body.status).to.eq('ok');

            const sidCookie = loginResp.headers['set-cookie']
                .find(c => c.startsWith('sid='))
                .split(';')[0];

            const cookieHeader = {
                Cookie: sidCookie
            };

            cy.request({
                method: 'DELETE',
                url: '/api/users',
                headers: {
                    ...cookieHeader,
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            }).then((updateResp) => {
                expect(updateResp.status).to.eq(200);
                expect(updateResp.body.status).to.eq('ok');
            });
        });
    });
});
