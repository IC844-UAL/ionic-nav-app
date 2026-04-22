import { provideRouter } from '@angular/router';
import { mount } from 'cypress/angular';
import { TabsPage } from '../../src/app/tabs/tabs.page';

describe('TabsPage (Cypress Component)', () => {
  it('shows correct text and icon for Clients tab', () => {
    mount(TabsPage, {
      providers: [provideRouter([])]
    });

    cy.get('ion-tab-button[tab="clients"]').should('contain.text', 'Clients');
    cy.get('ion-tab-button[tab="clients"] ion-icon')
      .should('have.attr', 'name', 'people');
  });

  it('shows correct text and icon for Reservations tab', () => {
    mount(TabsPage, {
      providers: [provideRouter([])]
    });

    cy.get('ion-tab-button[tab="reservations"]').should('contain.text', 'Reservations');
    cy.get('ion-tab-button[tab="reservations"] ion-icon')
      .should('have.attr', 'name', 'calendar');
  });

  it('shows correct text and icon for Products tab', () => {
    mount(TabsPage, {
      providers: [provideRouter([])]
    });

    cy.get('ion-tab-button[tab="products"]').should('contain.text', 'Products');
    cy.get('ion-tab-button[tab="products"] ion-icon')
      .should('have.attr', 'name', 'cube');
  });
});
