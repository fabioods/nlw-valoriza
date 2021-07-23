import { Router } from 'express';
import {
  CreateUserController,
  CreateTagController,
  AuthenticateUserController,
  CreateComplimentController,
  ListComplimentsByUserSenderController,
  ListComplimentsByUserReceiverController,
  ListTagsController,
} from './controllers';

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
const listTagsController = new ListTagsController();

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
router.get('/tags', ensureAuth, listTagsController.handle);

export { router };
