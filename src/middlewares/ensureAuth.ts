import { NextFunction, Request, Response } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { NoExistsError, InvalidParameterError } from '../utils/error';

interface TokenOptions {
  email: string;
  name: string;
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const auth = req.headers.authorization;
  if (!auth) throw new NoExistsError('token');

  const [, token] = auth.split(' ');

  const verifyToken = verify(token, '7094f94201abca95b79864f60c03562b');
  if (!verifyToken) throw new InvalidParameterError('token');

  const { email, name, sub } = decode(token) as TokenOptions;

  req.email = email;
  req.name = name;
  req.user_id = sub;

  return next();
}
