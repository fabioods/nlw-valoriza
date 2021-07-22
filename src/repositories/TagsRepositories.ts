import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/Tag';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag> {
  async getByName(name: string): Promise<Tag> {
    const tag = await this.findOne({ where: { name } });
    return tag;
  }

  async getTagsOrderedByName(): Promise<Tag[]> {
    const t = await this.find({ order: { name: 'ASC' } });
    return t;
  }
}
