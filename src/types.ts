
export interface Stat {
  current: number;
  max: number;
}

export enum CardType {
  SUBCLASS = 'SUBCLASS',
  ANCESTRY = 'ANCESTRY',
  COMMUNITY = 'COMMUNITY',
  DOMAIN = 'DOMAIN',
  TRANSFORMATION = 'TRANSFORMATION',
  ITEM = 'ITEM'
}

export interface Card {
  id: string;
  name: string;
  type: CardType;
  description: string;
  imageUrl?: string;
  level?: number; // For domains
  stressCost?: number; // For vault usage
  tags?: string[]; // e.g., "Grace", "Codex"
}

export interface Character {
  id: string;
  name: string;
  class: string;
  additionalClasses?: string[]; // For multiclassing
  evasion: number;
  threshold1: number;
  threshold2: number;
  hp: Stat;
  stress: Stat;
  hope: Stat;
  armor: Stat;
  
  // Card Management
  hand: Card[];
  vault: Card[];
}

export interface ClassData {
  name: string;
  starting_stats: {
    evasion: number;
    hp: number;
  };
  domains: string[];
  features: {
    class_features_description: string;
    class_hope_feature_description?: string;
  };
  subclasses?: Record<string, any>;
}

export enum ViewState {
  LIST = 'LIST',
  CREATE = 'CREATE',
  DETAIL = 'DETAIL',
  LIBRARY = 'LIBRARY'
}

export enum DetailTab {
  STATS = 'STATS',
  CARDS = 'CARDS'
}
