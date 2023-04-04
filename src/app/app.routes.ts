import { Route } from '@angular/router';
import { DefaultComponent, FullScreenComponent } from './layouts';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FullScreenComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@dnd/pages').then((mod) => mod.MainComponent),
      },
    ],
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'player',
        loadChildren: () =>
          import('@dnd/features/player').then((mod) => mod.PLAYER_ROUTES),
      },
    ],
  },
];
