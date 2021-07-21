import { Router } from 'express';
import { CreateUserController, CreateTagController } from './controllers';
import { ensureAuth } from './middlewares';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuth, createTagController.handle);

export { router };
