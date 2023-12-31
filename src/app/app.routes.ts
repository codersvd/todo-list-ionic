import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () => import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: 'lists',
    loadComponent: () => import('./components/categories/categories.component').then((m) => m.CategoriesComponent),
    title: 'Groups of items',
  },
  // {
  //   path: 'list/:id',
  //   component: ItemListComponent,
  //   title: 'Home details'
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

