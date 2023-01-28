import { TranslatableText, TranslatedName } from '~utils/translation'; // types

export enum UnlockTypes {
  DEFAULT = 'default',
  LEVEL = 'level',
  BOND = 'bond',
  SHOP = 'shop',
  SIDEQUEST = 'sidequest',
  MAINQUEST = 'mainquest',
  OTHER = 'other',
}

interface DefaultUnlock {
  type: UnlockTypes.DEFAULT;
}

interface LevelUnlock {
  type: UnlockTypes.LEVEL;
  level: string;
}

interface BondUnlock {
  type: UnlockTypes.BOND;
  character: string;
  bondLevel: string;
}

interface ShopUnlock {
  type: UnlockTypes.SHOP;
  shop: string;
}

interface SidequestUnlock {
  type: UnlockTypes.SIDEQUEST;
  quest: string;
}

interface MainquestUnlock {
  type: UnlockTypes.MAINQUEST;
  quest: string;
}

interface OtherUnlock {
  type: UnlockTypes.OTHER;
  source: string;
}

export interface DbRecipe {
  name: TranslatableText;
  tool: TranslatableText;
  price: number;
  ingredients: TranslatableText[];
  tags: TranslatableText[];
  incompatibleTags: TranslatableText[];
  cookingTime: string;
  source:
    | DefaultUnlock
    | LevelUnlock
    | BondUnlock
    | ShopUnlock
    | SidequestUnlock
    | MainquestUnlock
    | OtherUnlock;
  description: TranslatableText;
  dlc: string;
}

export interface Recipe extends TranslatedName {
  tool: TranslatedName;
  price: number;
  ingredients: TranslatedName[];
  tags: string[];
  incompatibleTags: string[];
  cookingTime: string;
  source:
    | DefaultUnlock
    | LevelUnlock
    | BondUnlock
    | ShopUnlock
    | SidequestUnlock
    | MainquestUnlock
    | OtherUnlock;
  description: string;
  dlc: string;
}
