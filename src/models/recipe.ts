import { DbRecipe, Recipe } from '~models/recipeInterfaces'; // types
import { getDefault } from '~utils/translation';
import { Translator } from '~utils/translation'; // types

export const dbRecipeToRecipe =
  (translate: Translator) =>
  (recipe: DbRecipe): Recipe => {
    return {
      name: translate(recipe.name),
      defaultName: getDefault(recipe.name),
      tool: {
        name: translate(recipe.tool),
        defaultName: getDefault(recipe.tool),
      },
      price: recipe.price,
      ingredients: recipe.ingredients.map((ingredient) => {
        return {
          name: translate(ingredient),
          defaultName: getDefault(ingredient),
        };
      }),
      tags: recipe.tags.map(translate),
      incompatibleTags: recipe.incompatibleTags.map(translate),
      cookingTime: recipe.cookingTime,
      source: recipe.source,
      description: translate(recipe.description),
      dlc: recipe.dlc,
    };
  };
