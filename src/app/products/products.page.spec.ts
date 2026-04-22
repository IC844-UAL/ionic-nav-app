import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { ProductsPage } from './products.page';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage],
      providers: [
        {
          provide: NavController,
          useValue: { navigateRoot: jasmine.createSpy('navigateRoot') }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the products list items for products tab', () => {
    const productItems = fixture.nativeElement.querySelectorAll('ion-list.products-list ion-item');
    const titleNodes = Array.from(
      fixture.nativeElement.querySelectorAll('ion-list.products-list ion-item h2')
    ) as Element[];
    const titles = titleNodes.map((item) => item.textContent?.trim());

    expect(productItems.length).toBe(3);
    expect(titles).toEqual(['Product 1', 'Product 2', 'Product 3']);
  });
});
