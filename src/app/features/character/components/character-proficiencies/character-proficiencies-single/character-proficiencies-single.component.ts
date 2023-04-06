import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd-companion-character-proficiencies-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-proficiencies-single.component.html',
  styleUrls: ['./character-proficiencies-single.component.scss'],
})
export class CharacterProficienciesSingleComponent {
  @Input() label?: string;
  @Input() value?: number;
}
