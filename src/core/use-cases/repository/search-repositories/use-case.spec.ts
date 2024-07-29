import { Test, TestingModule } from '@nestjs/testing';
import { Input } from './input';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { SearchRepositories } from './use-case';
import { FakeRepositoryRepository } from '../../../../database/repositories/fakes';
import { faker } from '@faker-js/faker';

import { MockRepositoryModule } from '../mock.module';
import { RepositoryRepository } from '../../../../database/repositories/interfaces';
import { Repository } from '../../../../database/entities';
import { transformRepositories } from '../../utils';

describe('# Search Repositories', () => {
  let use_case: SearchRepositories;
  let repository: FakeRepositoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockRepositoryModule],
    }).compile();

    use_case = module.get<SearchRepositories>(SearchRepositories);
    repository = module.get<FakeRepositoryRepository>(RepositoryRepository);
  });

  const fake_repository: Partial<Repository> = {
    external_created_at: new Date(),
    language: 'JavaScript',
    name: faker.company.name(),
    repository_external_id: 45646,
    url: faker.internet.url(),
  };

  const entity: Partial<Repository>[] = [fake_repository, fake_repository];

  const input: Input = {
    term: faker.company.name(),
  };

  const output_expected = {
    data: { repositories: transformRepositories(entity) },
  };

  it.each([
    {
      run: true,
      should: 'Should be search repositories',
      input: () => input,
      setup: () => {
        repository.search.mockResolvedValueOnce(entity);
      },
      expected: (output: any) => {
        expect(output).toEqual(output_expected);
        expect(repository.search).toBeCalledTimes(1);
        expect(repository.search).toHaveBeenCalledWith(input.term);
      },
    },
  ])('$should', async ({ run, setup, input, expected }) => {
    if (!run) return;

    if (setup) setup();

    use_case
      .execute(input() as Input)
      .then(expected)
      .catch(expected);
  });
});
