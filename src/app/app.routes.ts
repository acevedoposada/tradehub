import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public/public.layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page')
      }
    ]
  }
];
