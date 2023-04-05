import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, CharactersListComponent } from '@dnd/features/character';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'dnd-companion-player-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, CharactersListComponent],
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss'],
})
export class PlayerOverviewComponent {
  private _router = inject(Router);

  characters: Character[] = [
    {
      id: '1',
      name: 'First',
    },
    {
      id: '2',
      name: 'Second',
    },
    {
      id: '3',
      name: 'Third',
    },
    {
      id: '4',
      name: 'Fourth',
    },
  ];

  onCharacterSelect(character: Character): void {
    this._router.navigate([`/player/characters/${character.id}`]);
  }
}
