import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUserByEmail(email: string): Promise<User> {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
