import { Injectable } from '@nestjs/common';
import { Input } from './input';
import { RepositoryRepository } from '../../../../database/repositories/interfaces';
import { Output } from './output';
import { transformRepositories } from '../../utils';

@Injectable()
export class SearchRepositories {
  constructor(private readonly repository: RepositoryRepository) {}
  async execute(input: Input): Promise<Output> {
    const repositories = await this.repository.search(input.term);

    return {
      data: { repositories: transformRepositories(repositories) },
    };
  }
}
