import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '@dnd/core';

@Component({
  selector: 'dnd-companion-character-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-health.component.html',
  styleUrls: ['./character-health.component.scss'],
})
export class CharacterHealthComponent {
  @Input() character?: Character;

  increaseHealth(): void {
    if (!this.character) return;
    this.character.health++;
  }

  decreaseHealth(): void {
    if (!this.character) return;
    this.character.health--;
  }
}
