import { NavController } from '@ionic/angular';
import { mount } from 'cypress/angular';
import { ProductsPage } from '../../src/app/products/products.page';

describe('ProductsPage (Cypress Component)', () => {
  it('displays the products list items', () => {
    mount(ProductsPage, {
      providers: [
        {
          provide: NavController,
          useValue: { navigateRoot: cy.stub().as('navigateRoot') }
        }
      ]
    });

    cy.get('ion-list.products-list ion-item').should('have.length', 3);
    cy.get('ion-list.products-list ion-item h2').then(($items) => {
      const products = [...$items].map((item) => item.textContent?.trim());
      expect(products).to.deep.equal(['Product 1', 'Product 2', 'Product 3']);
    });
  });
});
