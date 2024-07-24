import { Test, TestingModule } from '@nestjs/testing';
import { Input } from './input';
import { randomUUID } from 'crypto';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { CreateRepository } from './use-case';
import { FakeRepositoryRepository } from '../../../../database/repositories/fakes';
import { faker } from '@faker-js/faker';

import { MockRepositoryModule } from '../mock.module';
import { RepositoryRepository } from '../../../../database/repositories/interfaces';
import { User } from '../../../../database/entities';

describe('# Create Repositories', () => {
  let use_case: CreateRepository;
  let repository: FakeRepositoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockRepositoryModule],
    }).compile();

    use_case = module.get<CreateRepository>(CreateRepository);
    repository = module.get<FakeRepositoryRepository>(RepositoryRepository);

  });

  const user: User = {
    id: randomUUID(),
  } as User;

  const input: Input = {
    data:[{
      external_created_at: new Date(),
      language: 'JavaScript',
      name: faker.company.name(),
      repository_external_id: 45646,
      url: faker.internet.url(),
      user,
    }]
  };

  it.each([
    {
      run: true,
      should: 'Should be able to create repositories',
      input: () => input,
      setup: () => {
        repository.saveMany.mockResolvedValueOnce(undefined)
      },
      expected: (output: any) => {
        expect(output).toBeUndefined();
        expect(repository.saveMany).toBeTruthy()
        expect(repository.saveMany).toHaveBeenCalledWith(input.data);
      },
    },
  ])('$should', async ({ run, setup, input, expected }) => {
    if (!run) return;

    if (setup) setup();

    use_case.execute(input() as Input).then(expected).catch(expected);
  });
});
