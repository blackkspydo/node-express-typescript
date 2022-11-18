import express from 'express';
import { sqliteDataSource } from './utils/appDataSource.js';
import { usersRouter } from './routes/index.js';

sqliteDataSource
  .initialize()
  .then(() => {
    console.log('sqlite Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during sqlite Data Source initialization:', err);
  });

const app = express();

app.use('/api', usersRouter);

app.listen(8080);
