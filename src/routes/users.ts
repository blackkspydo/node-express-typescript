import bodyParser from 'body-parser';
import express from 'express';
import { validate } from '../middleware/validator.js';

import { UsersController } from '../controllers/index.js';
import { userSchema, profileSchema } from '../models/index.js';

const router = express.Router();
const jsonParser = bodyParser.json();
const usersController = new UsersController();
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', jsonParser, validate(userSchema), usersController.createUser);
router.put('/users/:id', jsonParser, usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);
router.put('/users/:id/verify', usersController.verifyUser);
router.get('/users/:id/profile', usersController.getProfile);
router.post('/users/:id/profile', jsonParser, validate(profileSchema), usersController.addProfile);

export { router as usersRouter };
