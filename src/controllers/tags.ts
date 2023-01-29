import { Router } from 'express';

import { dbTagToTag } from '~models/tag';
import { DbFoodTag, FoodTag } from '~models/tagInterfaces';
import { db } from '~utils/mongoConnection';
import { getTranslator } from '~utils/translation';

const tagsRouter = Router();

tagsRouter.get('/food', async (req, res) => {
  const translator = getTranslator(req.query.lang?.toString());
  try {
    const data = (await db
      .collection('foodTags')
      .find()
      .toArray()) as unknown as DbFoodTag[];
    const foodTags: FoodTag[] = data.map(dbTagToTag(translator));
    res.json(foodTags);
  } catch (err) {
    console.log(err);
  }
});

export { tagsRouter };
