import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRouterOutlet, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [ RouterModule, IonRouterOutlet, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonList, IonItem, IonLabel]
})
export class ReservationsPage {

constructor(private navCtrl: NavController) {}

reservations = [
  { id: 'R-001', client: 'Juan Perez', date: '2026-04-25' },
  { id: 'R-002', client: 'Maria Garcia', date: '2026-04-27' },
  { id: 'R-003', client: 'Carlos Ruiz', date: '2026-04-30' }
];

goToCreateReservation() {
  this.navCtrl.navigateForward('/create-reservation');
}

}
