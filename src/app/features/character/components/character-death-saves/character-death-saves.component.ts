import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dnd-companion-character-death-saves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-death-saves.component.html',
  styleUrls: ['./character-death-saves.component.scss'],
})
export class CharacterDeathSavesComponent {
  steps = Array(3).fill(null);

  successes = 0;

  failures = 0;

  onSuccess(): void {
    this.successes++;

    if (this.successes > this.steps.length) {
      this.successes = 0;
    }
  }

  onFailure(): void {
    this.failures++;

    if (this.failures > this.steps.length) {
      this.failures = 0;
    }
  }
}
