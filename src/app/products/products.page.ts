import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProductsPage {

  constructor(
    private navCtrl: NavController
  ) {}

  onLogout() {
    this.navCtrl.navigateRoot('/login');
  }
}