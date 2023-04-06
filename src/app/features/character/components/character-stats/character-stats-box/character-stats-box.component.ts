import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dnd-companion-character-stats-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-stats-box.component.html',
  styleUrls: ['./character-stats-box.component.scss'],
})
export class CharacterStatsBoxComponent {
  @Input() type: 'default' | 'stats' = 'default';

  @Input() label?: string;

  @Input() value?: number | string;

  @Input() bonus?: number;

  get isStatsType(): boolean {
    return this.type === 'stats';
  }

  isNumeric(value?: number | string): value is number {
    return typeof value === 'number' && !Number.isNaN(value);
  }
}
