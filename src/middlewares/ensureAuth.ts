import { NextFunction, Request, Response } from 'express';

export function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const admin = true;

  if (admin) return next();

  throw new Error('User not authenticated');
}
