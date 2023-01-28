import { Router } from 'express';

import { dbTagToTag } from '~models/tag';
import { DbFoodTag, FoodTag } from '~models/tagInterfaces';
import { db } from '~utils/mongoConnection';
import { getEn, getZh } from '~utils/translation';

const tagsRouter = Router();

tagsRouter.get('/food/zh', async (req, res) => {
  try {
    const data = (await db
      .collection('foodTags')
      .find()
      .toArray()) as unknown as DbFoodTag[];
    const foodTags: FoodTag[] = data.map(dbTagToTag(getZh));
    res.json(foodTags);
  } catch (err) {
    console.log(err);
  }
});

tagsRouter.get('/food/en', async (req, res) => {
  try {
    const data = (await db
      .collection('foodTags')
      .find()
      .toArray()) as unknown as DbFoodTag[];
    const foodTags: FoodTag[] = data.map(dbTagToTag(getEn));
    res.json(foodTags);
  } catch (err) {
    console.log(err);
  }
});

export { tagsRouter };
