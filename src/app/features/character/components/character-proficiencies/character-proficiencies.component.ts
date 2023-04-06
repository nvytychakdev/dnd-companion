import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterProficienciesSectionComponent } from './character-proficiencies-section/character-proficiencies-section.component';
import { CharacterProficienciesSingleComponent } from './character-proficiencies-single/character-proficiencies-single.component';
import { Proficiency } from '../../interfaces/character.interface';

@Component({
  selector: 'dnd-companion-character-proficiencies',
  standalone: true,
  imports: [
    CommonModule,
    CharacterProficienciesSingleComponent,
    CharacterProficienciesSectionComponent,
  ],
  templateUrl: './character-proficiencies.component.html',
  styleUrls: ['./character-proficiencies.component.scss'],
})
export class CharacterProficienciesComponent {
  skills: Proficiency[] = [
    { label: 'Acrobatics', value: 5, checked: true },
    { label: 'Animal Handling', value: 0, checked: false },
    { label: 'Arcana', value: 1, checked: true },
    { label: 'Athletics', value: 2, checked: true },
    { label: 'Deceotion', value: 2, checked: true },
    { label: 'History', value: 1, checked: true },
    { label: 'Insight', value: 3, checked: true },
    { label: 'Intimidation', value: 0, checked: false },
    { label: 'Investigation', value: 0, checked: false },
    { label: 'Medicine', value: -1, checked: false },
    { label: 'Nature', value: 2, checked: false },
    { label: 'Perception', value: -2, checked: false },
    { label: 'Performance', value: -1, checked: false },
    { label: 'Persuasion', value: 0, checked: false },
    { label: 'Religion', value: 1, checked: false },
    { label: 'Sleight of Hand', value: 2, checked: false },
    { label: 'Stelth', value: 3, checked: false },
    { label: 'Survival', value: 2, checked: false },
  ];

  throws: Proficiency[] = [
    { label: 'Strength', value: 5, checked: true },
    { label: 'Dexterity', value: 0, checked: false },
    { label: 'Constitution', value: 1, checked: true },
    { label: 'Intelligence', value: 2, checked: true },
    { label: 'Wisdom', value: 2, checked: true },
    { label: 'Charisma', value: 1, checked: true },
  ];
}
