import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterStatsBoxComponent } from './character-stats-box/character-stats-box.component';
import { Stat } from '../../interfaces/character.interface';

@Component({
  selector: 'dnd-companion-character-stats',
  standalone: true,
  imports: [CommonModule, CharacterStatsBoxComponent],
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss'],
})
export class CharacterStatsComponent {
  stats: Stat[] = [
    {
      label: 'Strength',
      value: 10,
      bonus: 1,
    },
    {
      label: 'Dexterity',
      value: 10,
      bonus: -1,
    },
    {
      label: 'Constitution',
      value: 10,
      bonus: 0,
    },
    {
      label: 'Intelligence',
      value: 10,
      bonus: 3,
    },
    {
      label: 'Wisdom',
      value: 10,
      bonus: 2,
    },
    {
      label: 'Charisma',
      value: 10,
      bonus: 1,
    },
  ];
}
