import { DbFoodTag, FoodTag } from '~models/tagInterfaces'; // types
import { getDefault } from '~utils/translation';
import { Translator } from '~utils/translation'; // types

export const dbTagToTag =
  (translate: Translator) =>
  (tag: DbFoodTag): FoodTag => translate(tag.name) || getDefault(tag.name);
