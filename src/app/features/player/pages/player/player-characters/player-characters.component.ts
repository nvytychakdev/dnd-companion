import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character, CharactersListComponent } from '@dnd/features/character';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-companion-player-characters',
  standalone: true,
  imports: [CommonModule, CharactersListComponent],
  templateUrl: './player-characters.component.html',
  styleUrls: ['./player-characters.component.scss'],
})
export class PlayerCharactersComponent {
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
