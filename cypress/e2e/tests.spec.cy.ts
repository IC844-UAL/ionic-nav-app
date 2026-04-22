describe('Required E2E User Flows', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Customer Detail Access: navigates to detail page and shows the correct customer ID', () => {
    cy.visit('/tabs/clients');
    cy.contains('ion-item', 'Juan Pérez').click();

    cy.url().should('include', '/client-detail/123');
    cy.contains('h3', 'Client ID: 123').should('be.visible');
  });

  it('Customer Detail Back Button (direct URL): uses defaultHref and returns to clients tab', () => {
    cy.visit('/client-detail/123');

    cy.get('ion-back-button').should('have.attr', 'defaulthref', '/tabs/clients');
    cy.get('ion-back-button').shadow().find('button').click();
    cy.url().should('include', '/tabs/clients');
  });

  it('Customer Detail Back Button (flow): returns to clients tab after navigating from tab group', () => {
    cy.visit('/tabs/clients');
    cy.contains('ion-item', 'María García').click();
    cy.url().should('include', '/client-detail/456');

    cy.get('ion-back-button').shadow().find('button').click();
    cy.url().should('include', '/tabs/clients');
  });

  it('Reservation Creation Access: navigates successfully from reservations tab', () => {
    cy.visit('/tabs/reservations');
    cy.contains('ion-button', 'New Reservation').click();

    cy.url().should('include', '/create-reservation');
    cy.contains('ion-title', 'New Reservation').should('be.visible');
  });

  it('Reservation Back Button (direct URL): uses defaultHref and returns to reservations tab', () => {
    cy.visit('/create-reservation');

    cy.get('ion-back-button').should('have.attr', 'defaulthref', '/tabs/reservations');
    cy.get('ion-back-button').shadow().find('button').click();
    cy.url().should('include', '/tabs/reservations');
  });

  it('Reservation Back Button (flow): returns to reservations tab after normal navigation', () => {
    cy.visit('/tabs/reservations');
    cy.contains('ion-button', 'New Reservation').click();
    cy.url().should('include', '/create-reservation');

    cy.get('ion-back-button').shadow().find('button').click();
    cy.url().should('include', '/tabs/reservations');
  });

  it('Logout Redirection: redirects to login page when clicking Cerrar Sesion', () => {
    cy.visit('/tabs/products');
    cy.contains('ion-button', 'Cerrar Sesión').click();

    cy.url().should('include', '/login');
    cy.contains('h1', 'Welcome back').should('be.visible');
  });
});
