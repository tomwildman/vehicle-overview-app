describe('Vehicle Overview App', () => {
	it('should display title on home page', () => {
		cy.visit('/');
		cy.contains('h1', 'Vehicle Overview App');
	});

	const menubarStart = '.p-menubar-start > h1';

	it('should display a menubar', () => {
		cy.visit('/');

		cy.contains(menubarStart, 'Vehicle Overview App');
	});
});