import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '@dnd/core';

@Component({
  selector: 'dnd-companion-character-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent {
  @Input() character?: Character;
}
