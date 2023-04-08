import { Character } from '../models/character.model';
import { ClassType, DEFAULT_CLASSES } from '../models/class.model';
import { DEFAULT_RACES, RaceType } from '../models/race.model';

const mockCharacter = new Character('1', 'Anduina');
mockCharacter.level = 1;
mockCharacter.health = 10;
mockCharacter.class = DEFAULT_CLASSES[ClassType.CLERIC];
mockCharacter.race = DEFAULT_RACES[RaceType.AASIMAR];
mockCharacter.stats = [
  { type: 'strength', value: 12 },
  { type: 'dexterity', value: 8 },
  { type: 'constitution', value: 10 },
  { type: 'intelligence', value: 12 },
  { type: 'wisdom', value: 15 },
  { type: 'charisma', value: 14 },
];
mockCharacter.skills = ['medicine', 'religion'];

console.log(mockCharacter);

export const AVAILABLE_CHARACTER_MOCKS = [mockCharacter];
