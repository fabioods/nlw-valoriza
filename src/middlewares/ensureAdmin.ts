import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepositories';

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> {
  const { user_id } = req;
  const userRepository = getCustomRepository(UserRepository);
  const admin = await userRepository.isUserAdmin(user_id);

  if (admin) return next();
  return res.status(401).json({ message: 'User is not admin' });
}
