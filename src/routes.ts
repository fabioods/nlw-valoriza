import { Router } from 'express';
import {
  CreateUserController,
  CreateTagController,
  AuthenticateUserController,
  CreateComplimentController,
} from './controllers';
import { ensureAuth, ensureAdmin } from './middlewares';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/auth', authUserController.handle);
router.post('/users', createUserController.handle);
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle);
router.post('/compliments', ensureAuth, createComplimentController.handle);

export { router };
