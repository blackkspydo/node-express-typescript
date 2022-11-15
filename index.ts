import express from 'express';
import {sequelize} from './src/utils/database';

const app = express();

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
app.listen(5000, () => {
  console.log(`[server]: Server is running at http://localhost:5000`);
});