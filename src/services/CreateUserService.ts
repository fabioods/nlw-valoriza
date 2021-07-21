import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepositories';
import { InvalidParameterError, AlreadyExists } from '../utils/error';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ email, admin, name, password }: IUserRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new InvalidParameterError('Email');
    }

    const userAlreadyExists = await userRepository.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AlreadyExists('user');
    }

    const user = userRepository.create({ email, name, admin, password });
    await userRepository.save(user);
    return user;
  }
}
