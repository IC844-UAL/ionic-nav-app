import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton]
})
export class ClientDetailPage implements OnInit {

  // This variable name must match the parameter name in app.routes.ts (:elementid)
  @Input() elementid?: string;

  constructor() { }

  ngOnInit() {
    console.log("ID received via @Input:", this.elementid);
  }

}
