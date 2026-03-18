import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { people, calendar, cube } from 'ionicons/icons';
addIcons({ people, calendar, cube });

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
    IonLabel,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
    IonTabs
  ]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
