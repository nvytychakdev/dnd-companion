import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { AVAILABLE_CHARACTER_MOCKS } from '../mocks';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getCharacters(): Character[] {
    return AVAILABLE_CHARACTER_MOCKS;
  }

  getCharacterById(id: string): Character {
    const character = AVAILABLE_CHARACTER_MOCKS.find((char) => char.id === id);
    if (!character) throw new Error('No characters found');
    return character;
  }
}
