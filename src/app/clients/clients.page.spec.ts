import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ClientsPage } from './clients.page';

describe('ClientsPage', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the clients list items', () => {
    const clientItems = fixture.nativeElement.querySelectorAll('ion-list.clients-list ion-item');
    const nameNodes = Array.from(
      fixture.nativeElement.querySelectorAll('ion-list.clients-list ion-item h2')
    ) as Element[];
    const names = nameNodes.map((item) => item.textContent?.trim());

    expect(clientItems.length).toBe(4);
    expect(names).toEqual(['Juan Pérez', 'María García', 'Carlos Ruiz', 'Lucía Torres']);
  });
});
