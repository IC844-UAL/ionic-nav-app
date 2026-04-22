import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPage } from './reservations.page';
import { NavController } from '@ionic/angular';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPage],
      providers: [
        {
          provide: NavController,
          useValue: { navigateForward: jasmine.createSpy('navigateForward') }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display reservation list items', () => {
    const reservationItems = fixture.nativeElement.querySelectorAll('ion-list.reservations-list ion-item');
    const titleNodes = Array.from(
      fixture.nativeElement.querySelectorAll('ion-list.reservations-list ion-item h3')
    ) as Element[];
    const titles = titleNodes.map((item) => item.textContent?.trim());

    expect(reservationItems.length).toBe(3);
    expect(titles).toEqual([
      'R-001 - Juan Perez',
      'R-002 - Maria Garcia',
      'R-003 - Carlos Ruiz'
    ]);
  });
});
