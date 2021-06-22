import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepositories';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ email, admin, name }: IUserRequest): Promise<User> {
    const userRepository = new UserRepository();

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await userRepository.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = userRepository.create({ email, name, admin });
    await userRepository.save(user);
    return user;
  }
}
