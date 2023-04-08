import {
  CharacterStat,
  CharacterStatWithModifier,
  SkillType,
  StatType,
} from '../interfaces';
import {
  getCharacterModifierByStat,
  getCharacterProficiencyValue,
  getCharacterStatModifier,
  isCharacterProficientTo,
} from '../utils';
import { Class } from './class.model';
import { Race } from './race.model';

const BASE_PASSIVE_WISDOM = 10;
const BASE_PROFICIENCY_BONUS = 2;

export class Character {
  protected _id: string;
  protected _name: string;
  protected _level: number;
  protected _stats: CharacterStat[];
  protected _skills: SkillType[];
  protected _race?: Race;
  protected _class?: Class;
  protected _abilities?: string[];
  protected _description?: string[];
  protected _equipment?: string[];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this._level = 1;
    this._stats = [];
    this._skills = [];
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get level(): number {
    return this._level;
  }

  set level(level: number) {
    this._level = level;
  }

  get race(): Race {
    if (!this._race) throw new Error('No race assigned to the character');
    return this._race;
  }

  set race(race: Race) {
    this._race = race;
  }

  get class(): Class {
    if (!this._class) throw new Error('No class');
    return this._class;
  }

  set class(charClass: Class) {
    this._class = charClass;
  }

  get abilities(): string[] {
    if (!this._abilities) throw new Error('No abilities');
    return this._abilities;
  }

  set abilities(abilities: string[]) {
    this._abilities = abilities;
  }

  get description(): string[] | undefined {
    return this._description;
  }

  get equipment(): string[] | undefined {
    return this._equipment;
  }

  get health(): number {
    throw new Error('Not implemented');
  }

  get maxHealth(): number {
    throw new Error('Not implemented');
  }

  get armorClass(): number {
    throw new Error('Not implemented');
  }

  get initiative(): number {
    throw new Error('Not implemented');
  }

  get speed(): number {
    throw new Error('Not implemented');
  }

  get stats(): CharacterStatWithModifier[] {
    return this._stats.map((stat) => ({
      ...stat,
      modifier: getCharacterStatModifier(stat),
    }));
  }

  set stats(stats: CharacterStat[]) {
    this._stats = stats;
  }

  get inspiration(): number {
    throw new Error('Not implemented');
  }

  get proficiencyBonus(): number {
    return BASE_PROFICIENCY_BONUS + Math.floor((this.level - 1) / 4);
  }

  get passiveWisdom(): number {
    if (this.isProficientTo('perception')) {
      return (
        BASE_PASSIVE_WISDOM + getCharacterProficiencyValue(this, 'wisdom', true)
      );
    }

    return BASE_PASSIVE_WISDOM + getCharacterModifierByStat(this, 'wisdom');
  }

  get skills(): SkillType[] {
    return this._skills;
  }

  set skills(skills: SkillType[]) {
    const isValidSkills = this._isValidSkills(skills);
    if (!isValidSkills) throw new Error('Invalid skills assigned');
    this._skills = skills;
  }

  get savingThrows(): StatType[] {
    if (!this.class) throw new Error('No class to obtain saving throws');
    return this.class.proficiency.savingThrows;
  }

  get alignment(): string[] {
    throw new Error('Not implemented');
  }

  private _isValidSkills(skills: SkillType[]): boolean {
    return (
      skills.every((skill) =>
        this.class.proficiency.skills.type.includes(skill)
      ) && skills.length <= this.class.proficiency.skills.availableCount
    );
  }

  isProficientTo(proficiency?: SkillType | StatType): boolean {
    return isCharacterProficientTo(this, proficiency);
  }
}
