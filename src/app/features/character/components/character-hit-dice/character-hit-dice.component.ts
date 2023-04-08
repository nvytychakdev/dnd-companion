import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '@dnd/core';

@Component({
  selector: 'dnd-companion-character-hit-dice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-hit-dice.component.html',
  styleUrls: ['./character-hit-dice.component.scss'],
})
export class CharacterHitDiceComponent {
  @Input() character?: Character;
}
