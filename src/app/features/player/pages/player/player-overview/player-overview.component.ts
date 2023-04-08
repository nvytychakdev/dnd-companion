import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from '@dnd/features/character';
import { Router, RouterModule } from '@angular/router';
import { Character, CharacterService } from '@dnd/core';

@Component({
  selector: 'dnd-companion-player-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, CharactersListComponent],
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss'],
})
export class PlayerOverviewComponent {
  private _router = inject(Router);
  private _characters = inject(CharacterService);

  characters: Character[] = this._characters.getCharacters();

  onCharacterSelect(character: Character): void {
    this._router.navigate([`/player/characters/${character.id}`]);
  }
}
