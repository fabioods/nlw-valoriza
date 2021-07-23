import { getCustomRepository } from 'typeorm';
import { Compliment } from '../entities/Compliment';
import { ComplimentRepository } from '../repositories/ComplimentRepositories';

interface IRequest {
  id: string;
}

export class ListComplimentsByUserReceiverService {
  async execute({ id }: IRequest): Promise<Compliment[]> {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const compliments = await complimentRepository.getComplimentByUserReceiver(
      id,
    );
    return compliments;
  }
}
