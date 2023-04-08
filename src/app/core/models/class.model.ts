import { ClassHitPoints, ClassProficiency } from '../interfaces';

export enum ClassType {
  ARTIFICER = 'ARTIFICER',
  BARBARIAN = 'BARBARIAN',
  BARD = 'BARD',
  CLERIC = 'CLERIC',
  CUSTOM = 'CUSTOM',
  DRUID = 'DRUID',
  MONK = 'MONK',
  MYSTIC = 'MYSTIC',
  PALADING = 'PALADING',
  RANGER = 'RANGER',
  SORCERER = 'SORCERER',
  WARIOR = 'WARIOR',
  WARLOCK = 'WARLOCK',
  WIZARD = 'WIZARD',
}

export abstract class Class {
  protected abstract _type: ClassType;
  protected abstract _subtype?: string;
  protected abstract _hitPoints: ClassHitPoints;
  protected abstract _proficiency: ClassProficiency;

  get type(): string {
    return this._type;
  }

  get subtype(): string | undefined {
    return this._subtype;
  }

  get hitPoints(): ClassHitPoints {
    return this._hitPoints;
  }

  get proficiency(): ClassProficiency {
    return this._proficiency;
  }
}

export class ClericClass extends Class {
  protected override _type = ClassType.CLERIC;

  protected override _subtype?: string | undefined;

  protected override _hitPoints: ClassHitPoints = {
    dice: '1d8',
    firstLvlHits: {
      base: 8,
      bonus: 'constitution',
    },
    perLvlHits: {
      dice: '1d8',
      static: 5,
      bonus: 'constitution',
    },
  };

  protected override _proficiency: ClassProficiency = {
    armor: [{ type: 'light' }, { type: 'medium' }, { type: 'shield' }],
    weapon: [{ type: 'simple' }],
    tools: [],
    savingThrows: ['wisdom', 'charisma'],
    skills: {
      type: ['medicine', 'history', 'religion', 'perception'],
      availableCount: 2,
    },
  };
}

export const DEFAULT_CLASSES = {
  [ClassType.CLERIC]: new ClericClass(),
};
