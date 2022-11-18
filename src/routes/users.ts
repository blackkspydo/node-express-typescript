import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import express from 'express';
import { validate } from '~/middleware/validator';

import { UsersController } from '~/controllers';
import { userSchema } from '~/models/users.model';

const router = express.Router();
const jsonParser = bodyParser.json();
const usersController = new UsersController();

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', validate(userSchema), jsonParser, usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

export { router as usersRouter };
