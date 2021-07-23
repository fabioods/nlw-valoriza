import { getCustomRepository } from 'typeorm';
import { Compliment } from '../entities/Compliment';
import { ComplimentRepository } from '../repositories/ComplimentRepositories';
import { UserRepository } from '../repositories/UserRepositories';
import {
  InvalidParameterError,
  NotEqualError,
  NoExistsError,
} from '../utils/error';

type IRequest = {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
};

export class CreateComplimentService {
  async execute({
    message,
    tag_id,
    user_sender,
    user_receiver,
  }: IRequest): Promise<Compliment> {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (!message) throw new InvalidParameterError('message');
    if (!tag_id) throw new InvalidParameterError('tag_id');
    if (!user_sender) throw new InvalidParameterError('user_sender');
    if (!user_receiver) throw new InvalidParameterError('user_receiver');

    if (user_sender === user_receiver)
      throw new NotEqualError('user_receiver', 'user_sender');

    const userSender = await userRepository.getUserById(user_sender);
    if (!userSender) throw new NoExistsError('user_sender');

    const userReceiver = await userRepository.getUserById(user_receiver);
    if (!userReceiver) throw new NoExistsError('user_receiver');

    const compliment = complimentRepository.create({
      message,
      tag_id,
      user_sender,
      user_receiver,
    });
    await complimentRepository.save(compliment);

    return compliment;
  }
}
