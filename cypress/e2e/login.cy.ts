Cypress.Commands.add('login', (username, password) => {
	cy.visit('/login');
	cy.get('#login').type(username);
	cy.get('#password').type(password);
	cy.get('p-button').click();
});

describe('Vehicle Overview App - authentication', () => {
	it('should redirect from root page to login page', () => {
		cy.visit('/');
		cy.location().should((location) => expect(location.pathname).to.eq('/login'));
	});

	it('after login should be redirected to vehicle page', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.location().should((location) => expect(location.pathname).to.eq('/vehicles'));
	});

	it('should redirect to login page after logout', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.get('#logout').click();
		cy.location().should((location) => expect(location.pathname).to.eq('/login'));
	});

	it('should be redirect from login page after authenticated', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.location().should((location) => expect(location.pathname).to.eq('/vehicles'));
		cy.visit('/login');
		cy.location().should((location) => expect(location.pathname).to.eq('/vehicles'));
	});

	it('should be redirected to login page if not authenticated', () => {
		cy.visit('/vehicles');
		cy.location().should((location) => expect(location.pathname).to.eq('/login'));
	});
});