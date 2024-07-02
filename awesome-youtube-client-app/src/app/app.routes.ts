import { Routes } from '@angular/router';
import { CardDetailsComponent } from './youtube/card-details/card-details.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'main',
    title: 'main',
    loadComponent: () =>
      import('./youtube/search/search-results/search-results.component').then(
        m => m.SearchResultsComponent
      ),
  },
  {
    path: 'card/:id',
    title: 'card',
    loadComponent: () =>
      import('./youtube/card-details/card-details.component').then(
        m => m.CardDetailsComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    title: '404',
    loadComponent: () =>
      import('./core/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
];
