import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterStatsBoxComponent } from '../character-stats/character-stats-box/character-stats-box.component';
import { CharacterHealthComponent } from '../character-health/character-health.component';
import { CharacterDeathSavesComponent } from '../character-death-saves/character-death-saves.component';
import { CharacterHitDiceComponent } from '../character-hit-dice/character-hit-dice.component';
import { Character } from '@dnd/core';

@Component({
  selector: 'dnd-companion-character-stats-combat',
  standalone: true,
  imports: [
    CommonModule,
    CharacterStatsBoxComponent,
    CharacterHealthComponent,
    CharacterDeathSavesComponent,
    CharacterHitDiceComponent,
  ],
  templateUrl: './character-stats-combat.component.html',
  styleUrls: ['./character-stats-combat.component.scss'],
})
export class CharacterStatsCombatComponent {
  @Input() character?: Character;
}
