import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuhenticateUserService';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authenticateUserService = new AuthenticateUserService();
    const { email, password } = req.body;
    const token = await authenticateUserService.execute({ email, password });
    return res.json({ token });
  }
}
