import { MongoClient } from 'mongodb';

import * as config from '~utils/config';

const client = new MongoClient(config.MONGODB_URI);
export const db = client.db(config.DB_NAME);
