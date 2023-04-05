import { Route } from '@angular/router';
import { CharacterComponent } from './character.component';

export const CHARACTER_ROUTES: Route[] = [
  {
    path: '',
    component: CharacterComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./character-details/character-details.component').then(
            (mod) => mod.CharacterDetailsComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
