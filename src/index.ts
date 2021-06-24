import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import './database';
import { router } from './routes';

const app = express();
app.use(express.json());

app.use(router);
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
    }
    return res
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

app.listen(5000, () => {
  console.log("🚀 let's start");
});
