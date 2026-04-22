import { NavController } from '@ionic/angular';
import { mount } from 'cypress/angular';
import { ReservationsPage } from '../../src/app/reservations/reservations.page';

describe('ReservationsPage (Cypress Component)', () => {
  it('displays the reservations list items', () => {
    mount(ReservationsPage, {
      providers: [
        {
          provide: NavController,
          useValue: { navigateForward: cy.stub().as('navigateForward') }
        }
      ]
    });

    cy.get('ion-list.reservations-list ion-item').should('have.length', 3);
    cy.get('ion-list.reservations-list ion-item h3').then(($items) => {
      const titles = [...$items].map((item) => item.textContent?.trim());
      expect(titles).to.deep.equal([
        'R-001 - Juan Perez',
        'R-002 - Maria Garcia',
        'R-003 - Carlos Ruiz'
      ]);
    });
  });
});
