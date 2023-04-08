export interface Stat {
  label: string;
  type: StatType;
  value: number;
  bonus: number;
}

export interface CharacterStat {
  type: StatType;
  value: number;
}

export interface CharacterStatWithModifier extends CharacterStat {
  modifier: number;
}

export type SimpleStat = Omit<Stat, 'bonus'>;

export interface Proficiency {
  label: string;
  value: number;
  type?: StatType;
  skillType?: SkillType;
  checked: boolean;
}

export type StatType =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';

export interface Skill {
  type: SkillType;
  value: number;
}

export type SkillType =
  | 'acrobatics'
  | 'animalHandling'
  | 'arcana'
  | 'athletics'
  | 'deceotion'
  | 'history'
  | 'insight'
  | 'intimidation'
  | 'investigation'
  | 'medicine'
  | 'nature'
  | 'perception'
  | 'performance'
  | 'persuasion'
  | 'religion'
  | 'sleightOfHand'
  | 'stealth'
  | 'survival';
