import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton]
})
export class ClientDetailPage implements OnInit {

  @Input() elementid?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.elementid = this.elementid ?? this.route.snapshot.paramMap.get('elementid') ?? undefined;
    console.log("ID received via @Input:", this.elementid);
  }

}
