export enum RaceType {
  AASIMAR = 'AASIMAR',
}

export interface RaceExtras {
  type: 'humanoid' | 'monster';
  speed: number;
  vision: number;
}

export class Race {
  protected _name: string;
  protected _type: RaceType;
  protected _extras: RaceExtras;

  constructor(name: string, type: RaceType, extras: RaceExtras) {
    this._name = name;
    this._type = type;
    this._extras = extras;
  }

  get name(): string {
    if (!this._name) throw new Error('No name');
    return this._name;
  }
}

export const DEFAULT_RACES = {
  [RaceType.AASIMAR]: new Race('Aasimar', RaceType.AASIMAR, {
    type: 'humanoid',
    speed: 30,
    vision: 60,
  }),
};
