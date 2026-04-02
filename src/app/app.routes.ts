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
      },
      {
        path: 'providers',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/providers/providers.page')
          },
          {
            path: 'list',
            loadComponent: () => import('./features/providers/pages/list/list.page')
          },
          {
            path: ':id',
            loadComponent: () => import('./features/providers/pages/detail/detail.page')
          }
        ]
      }
    ]
  }
];
