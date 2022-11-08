import { Routes } from '@angular/router';

export const CORE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/summary-page/summary-page.module').then((m) =>m.SummaryPageModule)
  },
  {
    path: 'navigator',
    loadChildren: () => import('../pages/list-page/list-page.module').then((m) => m.ListPageModule),
  },
  { path: '**', redirectTo: '/notfound' }
]
