import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  BASE_SAVING_THROWS_PROFICIENCIES,
  BASE_SKILL_PROFICIENCIES,
  Character,
  Proficiency,
} from '@dnd/core';
import { CharacterProficienciesSectionComponent } from './character-proficiencies-section/character-proficiencies-section.component';
import { CharacterProficienciesSingleComponent } from './character-proficiencies-single/character-proficiencies-single.component';
import { getSavingThrows, getSkills } from '@dnd/core/utils';

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
export class CharacterProficienciesComponent implements OnInit {
  @Input() character?: Character;

  isInspired = false;
  skills: Proficiency[] = BASE_SKILL_PROFICIENCIES;
  throws: Proficiency[] = BASE_SAVING_THROWS_PROFICIENCIES;

  ngOnInit(): void {
    if (!this.character) return;
    this.skills = getSkills(this.character);
    this.throws = getSavingThrows(this.character);
  }

  toggleInspiration(): void {
    this.isInspired = !this.isInspired;
  }
}
