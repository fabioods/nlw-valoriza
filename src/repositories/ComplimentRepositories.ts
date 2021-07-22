import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../entities/Compliment';

@EntityRepository(Compliment)
export class ComplimentRepository extends Repository<Compliment> {
  async getComplimentByUserSender(id: string): Promise<Compliment[]> {
    const compliments = await this.find({
      where: { user_sender: id },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    return compliments;
  }

  async getComplimentByUserReceiver(id: string): Promise<Compliment[]> {
    const compliments = await this.find({
      where: { user_receiver: id },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
    return compliments;
  }
}
