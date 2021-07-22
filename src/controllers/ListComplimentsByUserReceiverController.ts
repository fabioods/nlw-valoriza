import { Request, Response } from 'express';
import { ListComplimentsByUserReceiverService } from '../services/ListComplimentsByUserReceiverService';

export class ListComplimentsByUserReceiverController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listComplimentsByUserReceiverService =
      new ListComplimentsByUserReceiverService();
    const { user_id } = req;
    const compliments = await listComplimentsByUserReceiverService.execute({
      id: user_id,
    });
    return res.json(compliments);
  }
}
