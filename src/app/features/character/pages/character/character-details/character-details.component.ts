import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterProficienciesComponent } from '../../../components/character-proficiencies/character-proficiencies.component';
import { CharacterStatsCombatComponent } from '../../../components/character-stats-combat/character-stats-combat.component';
import { CharacterStatsComponent } from '../../../components/character-stats/character-stats.component';

@Component({
  selector: 'dnd-companion-character-details',
  standalone: true,
  imports: [
    CommonModule,
    CharacterStatsComponent,
    CharacterProficienciesComponent,
    CharacterStatsCombatComponent,
  ],
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {}
