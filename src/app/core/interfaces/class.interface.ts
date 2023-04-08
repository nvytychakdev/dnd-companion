import { StatType, SkillType } from './character.interface';

export interface Armor {
  type: ArmorType;
}

export type ArmorType = 'light' | 'medium' | 'heavy' | 'shield';

export interface Weapon {
  type: WeaponType;
}

export type WeaponType = 'simple' | 'warior';

export interface Tools {
  name: string;
}

export interface ClassProficiency {
  armor: Armor[];
  weapon: Weapon[];
  tools?: Tools[];
  savingThrows: StatType[];
  skills: {
    type: SkillType[];
    availableCount: number;
  };
}

export interface ClassHitPoints {
  dice: string;
  firstLvlHits: {
    base: number;
    bonus?: StatType;
  };
  perLvlHits: {
    dice: string;
    static?: number;
    bonus?: StatType;
    hasBonusPerLevel?: boolean;
  };
}
