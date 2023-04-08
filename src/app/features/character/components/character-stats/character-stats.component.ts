import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BASE_STATS, Character } from '@dnd/core';
import { CharacterStatsBoxComponent } from './character-stats-box/character-stats-box.component';
import { Stat } from '../../interfaces';
import { getCharacterStatModifier } from '@dnd/core/utils';

@Component({
  selector: 'dnd-companion-character-stats',
  standalone: true,
  imports: [CommonModule, CharacterStatsBoxComponent],
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss'],
})
export class CharacterStatsComponent implements OnInit {
  @Input() character?: Character;

  stats: Stat[] = BASE_STATS;

  ngOnInit(): void {
    if (!this.character) return;
    this.stats = this._getCharacterStats(this.character);

    console.log(this.stats);
  }

  private _getCharacterStats(character: Character): Stat[] {
    return BASE_STATS.map((baseStat) => {
      const characterStat = character.stats.find(
        (s) => s.type === baseStat.type
      );

      if (!characterStat) return baseStat;

      const characterStatValue = characterStat?.value ?? baseStat.value;
      const characterStatBonus = getCharacterStatModifier(characterStat);
      return {
        ...baseStat,
        value: characterStatValue,
        bonus: characterStatBonus,
      };
    });
  }
}
