export interface Stat {
  current: number;
  max: number;
}

export interface Character {
  id: string;
  name: string;
  class: string;
  evasion: number;
  threshold1: number;
  threshold2: number;
  hp: Stat;
  stress: Stat;
  hope: Stat;
  armor: Stat;
}

export enum ViewState {
  LIST = 'LIST',
  CREATE = 'CREATE',
  DETAIL = 'DETAIL'
}