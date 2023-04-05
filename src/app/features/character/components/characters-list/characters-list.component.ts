import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dnd-companion-characters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() characters?: Character[];
  @Output() selectCharacter = new EventEmitter<Character>();
}
