import { Router } from 'express';

import { dbRecipeToRecipe } from '~models/recipe';
import { DbRecipe, Recipe } from '~models/recipeInterfaces'; // types
import { db } from '~utils/mongoConnection';
import { getTranslator } from '~utils/translation';

const recipesRouter = Router();

recipesRouter.get('/', async (req, res) => {
  const translator = getTranslator(req.query.lang?.toString());
  try {
    const data = (await db
      .collection('recipe')
      .find()
      .toArray()) as unknown as DbRecipe[];
    const recipes: Recipe[] = data.map(dbRecipeToRecipe(translator));
    res.json(recipes);
  } catch (err) {
    console.log(err);
  }
});

export { recipesRouter };
