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

  get vision(): number {
    if (!this._extras.vision) throw new Error('No vision');
    return this._extras.vision;
  }

  get speed(): number {
    if (!this._extras.speed) throw new Error('No speed');
    return this._extras.speed;
  }
}

export const DEFAULT_RACES = {
  [RaceType.AASIMAR]: new Race('Aasimar', RaceType.AASIMAR, {
    type: 'humanoid',
    speed: 30,
    vision: 60,
  }),
};
