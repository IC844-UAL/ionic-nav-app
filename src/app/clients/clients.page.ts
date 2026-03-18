import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList,
    RouterModule, IonLabel, IonIcon]
})
export class ClientsPage {

  constructor() { }

}
