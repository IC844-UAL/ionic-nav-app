import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'clients',
        loadComponent: () => import('./clients/clients.page').then(m => m.ClientsPage)
      },
      {
        path: 'reservations',
        loadComponent: () => import('./reservations/reservations.page').then(m => m.ReservationsPage)
      },
      {
        path: 'products',
        loadComponent: () => import('./products/products.page').then(m => m.ProductsPage)
      },
      {
        path: '',
        redirectTo: 'reservations', 
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'client-detail/:elementid',
    loadComponent: () => import('./client-detail/client-detail.page').then(m => m.ClientDetailPage)
  },
  {
    path: 'create-reservation',
    loadComponent: () => import('./create-reservation/create-reservation.page').then(m => m.CreateReservationPage)
  },
  {
    path: '',
    redirectTo: 'tabs/reservations', 
    pathMatch: 'full',
  },
];