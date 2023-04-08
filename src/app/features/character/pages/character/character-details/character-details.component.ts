import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  CharacterStatsComponent,
  CharacterProficienciesComponent,
  CharacterInfoComponent,
  CharacterStatsCombatComponent,
} from '../../../components';
import { CharacterService } from '@dnd/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dnd-companion-character-details',
  standalone: true,
  imports: [
    CommonModule,
    CharacterStatsComponent,
    CharacterProficienciesComponent,
    CharacterStatsCombatComponent,
    CharacterInfoComponent,
  ],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  private _route = inject(ActivatedRoute);
  private _character = inject(CharacterService);

  character = this._character.getCharacterById(
    this._route.snapshot.params['characterId']
  );
}
