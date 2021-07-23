import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepositories';
import { InvalidParameterError, AlreadyExistsError } from '../utils/error';

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

    if (!password) {
      throw new InvalidParameterError('Password');
    }

    const userAlreadyExists = await userRepository.getUserByEmail(email);

    if (userAlreadyExists) {
      throw new AlreadyExistsError('user');
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      email,
      name,
      admin,
      password: passwordHash,
    });
    await userRepository.save(user);
    return user;
  }
}
