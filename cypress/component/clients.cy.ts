import { provideRouter } from '@angular/router';
import { mount } from 'cypress/angular';
import { ClientsPage } from '../../src/app/clients/clients.page';

describe('ClientsPage (Cypress Component)', () => {
  it('displays the clients list items', () => {
    mount(ClientsPage, {
      providers: [provideRouter([])]
    });

    cy.get('ion-list.clients-list ion-item').should('have.length', 4);
    cy.get('ion-list.clients-list ion-item h2').then(($items) => {
      const names = [...$items].map((item) => item.textContent?.trim());
      expect(names).to.deep.equal(['Juan Pérez', 'María García', 'Carlos Ruiz', 'Lucía Torres']);
    });
  });
});
