import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proficiency } from '../../../interfaces/character.interface';

@Component({
  selector: 'dnd-companion-character-proficiencies-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-proficiencies-section.component.html',
  styleUrls: ['./character-proficiencies-section.component.scss'],
})
export class CharacterProficienciesSectionComponent {
  @Input() label?: string;
  @Input() proficiencies: Proficiency[] = [];
}
