import { Router } from 'express';

import { dbRecipeToRecipe } from '~models/recipe';
import { DbRecipe, Recipe } from '~models/recipeInterfaces'; // types
import { db } from '~utils/mongoConnection';
import { getEn, getZh } from '~utils/translation';

const recipesRouter = Router();

recipesRouter.get('/zh', async (req, res) => {
  try {
    const data = (await db
      .collection('recipe')
      .find()
      .toArray()) as unknown as DbRecipe[];
    const recipes: Recipe[] = data.map(dbRecipeToRecipe(getZh));
    res.json(recipes);
  } catch (err) {
    console.log(err);
  }
});

recipesRouter.get('/en', async (req, res) => {
  try {
    const data = (await db
      .collection('recipe')
      .find()
      .toArray()) as unknown as DbRecipe[];
    const recipes: Recipe[] = data.map(dbRecipeToRecipe(getEn));
    res.json(recipes);
  } catch (err) {
    console.log(err);
  }
});

export { recipesRouter };
