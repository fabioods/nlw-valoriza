import { getCustomRepository } from 'typeorm';
import { Tag } from '../entities/Tag';
import { TagRepository } from '../repositories/TagsRepositories';
import { InvalidParameterError, AlreadyExistsError } from '../utils/error';

interface IRequest {
  name: string;
}

export class CreateTagService {
  async execute({ name }: IRequest): Promise<Tag> {
    const tagRepository = getCustomRepository(TagRepository);
    if (!name) {
      throw new InvalidParameterError('Name');
    }

    const tagAlredyExists = await tagRepository.getByName(name);
    if (tagAlredyExists) {
      throw new AlreadyExistsError('tag');
    }

    const tag = await tagRepository.create({ name });
    await tagRepository.save(tag);
    return tag;
  }
}
