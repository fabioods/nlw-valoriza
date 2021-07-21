import { Router } from 'express';
import {
  CreateUserController,
  CreateTagController,
  AuthenticateUserController,
} from './controllers';
import { ensureAuth } from './middlewares';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthenticateUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuth, createTagController.handle);
router.post('/auth', authUserController.handle);

export { router };
