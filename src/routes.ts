import { Router } from 'express';
import {
  CreateUserController,
  CreateTagController,
  AuthenticateUserController,
  CreateComplimentController,
} from './controllers';
import { ListComplimentsByUserReceiverController } from './controllers/ListComplimentsByUserReceiverController';
import { ListComplimentsByUserSenderController } from './controllers/ListComplimentsByUserSenderController';
import { ensureAuth, ensureAdmin } from './middlewares';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentsByUserSenderController =
  new ListComplimentsByUserSenderController();
const listComplimentsByUserReceiverController =
  new ListComplimentsByUserReceiverController();

router.post('/auth', authUserController.handle);
router.post('/users', createUserController.handle);
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle);
router.post('/compliments', ensureAuth, createComplimentController.handle);
router.get(
  '/users/compliments/send',
  ensureAuth,
  listComplimentsByUserSenderController.handle,
);
router.get(
  '/users/compliments/receive',
  ensureAuth,
  listComplimentsByUserReceiverController.handle,
);

export { router };
