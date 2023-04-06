export interface Character {
  id: string;
  name: string;
}

export interface Stat {
  label: string;
  value: number;
  bonus: number;
}

export type SimpleStat = Omit<Stat, 'bonus'>;

export interface Proficiency {
  label: string;
  value: number;
  checked: boolean;
}
