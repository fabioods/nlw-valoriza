import { NextFunction, Request, Response } from 'express';

export function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const admin = true;

  if (admin) return next();

  return res.status(401).json({ message: 'User not authenticated' });
}
