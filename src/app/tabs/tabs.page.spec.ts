import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct text and icon for the Clients tab', () => {
    const el: HTMLElement = fixture.nativeElement;
    const tabButton = el.querySelector('ion-tab-button[tab="clients"]');

    expect(tabButton?.textContent).toContain('Clients');
    expect(tabButton?.querySelector('ion-icon')?.getAttribute('name')).toBe('people');
  });

  it('should have the correct text and icon for the Reservations tab', () => {
    const el: HTMLElement = fixture.nativeElement;
    const tabButton = el.querySelector('ion-tab-button[tab="reservations"]');

    expect(tabButton?.textContent).toContain('Reservations');
    expect(tabButton?.querySelector('ion-icon')?.getAttribute('name')).toBe('calendar');
  });

  it('should have the correct text and icon for the Products tab', () => {
    const el: HTMLElement = fixture.nativeElement;
    const tabButton = el.querySelector('ion-tab-button[tab="products"]');

    expect(tabButton?.textContent).toContain('Products');
    expect(tabButton?.querySelector('ion-icon')?.getAttribute('name')).toBe('cube');
  });
});
