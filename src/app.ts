import cors from 'cors';
import express, { Express, Request, Response } from 'express';

import { recipesRouter } from '~controllers/recipes';
import { tagsRouter } from '~controllers/tags';

const app: Express = express();

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' }).end();
};

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/recipes', recipesRouter);
app.use('/tags', tagsRouter);

app.use(unknownEndpoint);
export { app };
