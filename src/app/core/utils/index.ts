import { CharacterStat, Proficiency, SkillType, StatType } from '../interfaces';
import { Character } from '../models/character.model';
import {
  BASE_SAVING_THROWS_PROFICIENCIES,
  BASE_SKILL_PROFICIENCIES,
} from '../models/proficiency.model';

const BASE_STAT_VALUE = 10;

export function getCharacterStatModifier(stat: CharacterStat): number {
  return Math.floor((stat.value - BASE_STAT_VALUE) / 2);
}

export function isCharacterProficientTo(
  character: Character,
  proficiency?: SkillType | StatType
) {
  if (!proficiency) return false;

  if (isSkillTypeProficiency(proficiency)) {
    return proficiency && character.skills.includes(proficiency);
  }

  return proficiency && character.savingThrows.includes(proficiency);
}

export function isSkillTypeProficiency(
  proficiency: SkillType | StatType
): proficiency is SkillType {
  const allSkillTypes: SkillType[] = BASE_SKILL_PROFICIENCIES.filter(
    (s) => s.skillType
  ).map((s) => s.skillType as SkillType);

  return allSkillTypes.includes(proficiency as SkillType);
}

export function getSkills(character: Character): Proficiency[] {
  return BASE_SKILL_PROFICIENCIES.map((skill) => {
    const isCharacterProficient = isCharacterProficientTo(
      character,
      skill.skillType
    );

    return getCharacterProficiency(character, skill, isCharacterProficient);
  });
}

export function getSavingThrows(character: Character): Proficiency[] {
  return BASE_SAVING_THROWS_PROFICIENCIES.map((savingThrow) => {
    const isCharacterProficient = isCharacterProficientTo(
      character,
      savingThrow.type
    );

    return getCharacterProficiency(
      character,
      savingThrow,
      isCharacterProficient
    );
  });
}

export function getCharacterProficiency(
  character: Character,
  proficiency: Proficiency,
  isProficient?: boolean
): Proficiency {
  return {
    ...proficiency,
    value: getCharacterProficiencyValue(
      character,
      proficiency.type,
      isProficient
    ),
    checked: !!isProficient,
  };
}

export function getCharacterProficiencyValue(
  character: Character,
  proficiencyType?: StatType,
  isProficient?: boolean
): number {
  const statModifier = getCharacterModifierByStat(character, proficiencyType);

  if (isProficient) return character.proficiencyBonus + statModifier;
  return statModifier;
}

export function getCharacterModifierByStat(
  character: Character,
  statType?: StatType
): number {
  const stat = character.stats.find((stat) => stat.type === statType);
  if (!stat) throw new Error('Stat value was not found');

  return stat.modifier;
}
