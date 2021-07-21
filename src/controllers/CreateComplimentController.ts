import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

export class CreateComplimentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { message, tag_id, user_receiver, user_sender } = req.body;
    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receiver,
      user_sender,
    });
    return res.json(compliment);
  }
}
