Cypress.Commands.add('login', (username, password) => {
	cy.visit('/login');
	cy.get('#login').type(username);
	cy.get('#password').type(password);
	cy.get('p-button').click();
});

describe('Vehicle Overview App - vehicle page', () => {
	const menubarStart = '.p-menubar-start > h1';

	it('should display a menubar', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.get('p-menubar').should('be.visible');
		cy.get(menubarStart).contains(/^Vehicle Overview App$/);
	});

	it('should display a vehicles table', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.get('tbody tr').should('have.length', 15);
	});

	it('should not display a menu bar when not authenticated', () => {
		cy.login('Driver1!', 'Driver1!');
		cy.get('#logout').click();
		cy.get('p-menubar').should('not.exist');
	})
});