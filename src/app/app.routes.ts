import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/componenti/home/home').then(m => m.Home) },
  { path: 'menu', loadComponent: () => import('./features/componenti/menu/menu').then(m => m.Menu) },
  { path: 'territorio', loadComponent: () => import('./features/componenti/territorio/territorio').then(t => t.Territorio)}

];
