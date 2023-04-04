import { Route } from '@angular/router';
import { PlayerComponent } from './player.component';

export const PLAYER_ROUTES: Route[] = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./player-overview/player-overview.component').then(
            (mod) => mod.PlayerOverviewComponent
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('./player-rules/player-rules.component').then(
            (mod) => mod.PlayerRulesComponent
          ),
      },
      {
        path: 'characters',
        loadComponent: () =>
          import('./player-characters/player-characters.component').then(
            (mod) => mod.PlayerCharactersComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
