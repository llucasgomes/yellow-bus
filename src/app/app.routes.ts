import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'map',
    loadComponent: () => import('./feature/pages/map/map.page').then((m) => m.MapPage),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
