import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {
  getAll,
  getToDo,
  getDone,
  getTrash,
  update,
  create,
} from './Controllers/ToDoListController/index.js';

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Не найдена переменная окружения с ключем 'MONGODB_URI'");
}

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', getAll);
app.get('/todo', getToDo);
app.get('/done', getDone);
app.get('/trash', getTrash);

app.post('/todo', create);
app.patch('/update/:id', update);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
