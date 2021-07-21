import { getCustomRepository } from 'typeorm';
import { Tag } from '../entities/Tag';
import { TagRepository } from '../repositories/TagsRepositories';

interface IRequest {
  name: string;
}

export class CreateTagService {
  async execute({ name }: IRequest): Promise<Tag> {
    const tagRepository = getCustomRepository(TagRepository);
    if (!name) {
      throw new Error('Tag name required');
    }

    const tagAlredyExists = await tagRepository.getByName(name);
    if (tagAlredyExists) {
      throw new Error('Tag already exists');
    }

    const tag = await tagRepository.create({ name });
    await tagRepository.save(tag);
    return tag;
  }
}
