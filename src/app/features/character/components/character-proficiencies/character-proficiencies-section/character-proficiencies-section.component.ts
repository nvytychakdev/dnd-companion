import { Component, Input } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { Proficiency } from '../../../../../core/interfaces/character.interface';

@Component({
  selector: 'dnd-companion-character-proficiencies-section',
  standalone: true,
  imports: [CommonModule, SlicePipe],
  templateUrl: './character-proficiencies-section.component.html',
  styleUrls: ['./character-proficiencies-section.component.scss'],
})
export class CharacterProficienciesSectionComponent {
  @Input() hasType = false;
  @Input() label?: string;
  @Input() proficiencies: Proficiency[] = [];
}
