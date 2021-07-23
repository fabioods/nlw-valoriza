import { getCustomRepository } from 'typeorm';
import { Tag } from '../entities/Tag';
import { TagRepository } from '../repositories/TagsRepositories';

export class ListTagService {
  async execute(): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagRepository);
    const tags = await tagsRepository.getTagsOrderedByName();
    return tags;
  }
}
