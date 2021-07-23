import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import {
  InvalidParameterError,
  InvalidPasswordError,
  NoExistsError,
} from '../utils/error';
import { UserRepository } from '../repositories/UserRepositories';

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IRequest): Promise<string> {
    if (!email) throw new InvalidParameterError('email');
    if (!password) throw new InvalidParameterError('password');

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.getUserByEmail(email);
    if (!user) throw new NoExistsError('user');

    const comparePassword = await compare(password, user.password);
    if (!comparePassword) throw new InvalidPasswordError();

    const token = sign(
      {
        email: user.email,
        name: user.name,
      },
      '7094f94201abca95b79864f60c03562b',
      {
        subject: user.id,
        expiresIn: '1h',
      },
    );
    return token;
  }
}
