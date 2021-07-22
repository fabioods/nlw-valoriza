import { Request, Response } from 'express';
import { ListComplimentsByUserSenderService } from '../services/ListComplimentsByUserSenderService';

export class ListComplimentsByUserSenderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listComplimentsByUserSenderService =
      new ListComplimentsByUserSenderService();
    const { user_id } = req;
    const compliments = await listComplimentsByUserSenderService.execute({
      id: user_id,
    });
    return res.json(compliments);
  }
}
