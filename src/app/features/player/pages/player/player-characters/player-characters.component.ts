import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from '@dnd/features/character';
import { Router } from '@angular/router';
import { Character, CharacterService } from '@dnd/core';

@Component({
  selector: 'dnd-companion-player-characters',
  standalone: true,
  imports: [CommonModule, CharactersListComponent],
  templateUrl: './player-characters.component.html',
  styleUrls: ['./player-characters.component.scss'],
})
export class PlayerCharactersComponent {
  private _router = inject(Router);
  private _characters = inject(CharacterService);

  characters: Character[] = this._characters.getCharacters();

  onCharacterSelect(character: Character): void {
    this._router.navigate([`/player/characters/${character.id}`]);
  }
}
