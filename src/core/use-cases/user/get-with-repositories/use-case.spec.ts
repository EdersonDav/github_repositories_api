import { Test, TestingModule } from '@nestjs/testing';
import { Input } from './input';
import { randomUUID } from 'crypto';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { GetWithRepositories } from './use-case';
import { FakeUserRepository } from '../../../../database/repositories/fakes';
import { faker } from '@faker-js/faker';

import { MockUserModule } from '../mock.module';
import { UserRepository } from '../../../../database/repositories/interfaces';
import { Repository, User } from '../../../../database/entities';
import { transformRepositories } from '../../utils';
import { NotFoundException } from '@nestjs/common';

describe('# Get User with repositories', () => {
  let use_case: GetWithRepositories;
  let repository: FakeUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockUserModule],
    }).compile();

    use_case = module.get<GetWithRepositories>(GetWithRepositories);
    repository = module.get<FakeUserRepository>(UserRepository);
  });

  const user: User = {
    id: randomUUID(),
  } as User;

  const fake_repository: Partial<Repository> = {
    external_created_at: new Date(),
    language: 'JavaScript',
    name: faker.company.name(),
    repository_external_id: 45646,
    url: faker.internet.url(),
    user,
  };

  const fake_repositories: Partial<Repository>[] = [
    fake_repository,
    fake_repository,
  ];

  const input: Input = {
    user_name: faker.person.firstName(),
  };

  const entity: Partial<User> = {
    id: user.id,
    login: faker.person.firstName(),
    user_avatar_url: faker.internet.url(),
    repository: fake_repositories,
  };

  const output_result = {
    data: {
      user: {
        login: entity.login,
        avatar: entity.user_avatar_url,
        repositories: transformRepositories(fake_repositories),
      },
    },
  };

  it.each([
    {
      run: true,
      should: 'Should be able to get a user and their repositories',
      input: () => input,
      setup: () => {
        repository.getWithRepositories.mockResolvedValueOnce(entity);
      },
      expected: (output: any) => {
        expect(output).toStrictEqual(output_result);
        expect(repository.getWithRepositories).toHaveBeenCalledWith(
          input.user_name,
        );
      },
    },
    {
      run: true,
      should: 'Should be throw a new NotFoundException',
      input: () => input,
      setup: () => {
        repository.getWithRepositories.mockResolvedValueOnce(null);
      },
      expected: (output: any) => {
        expect(output).toBeInstanceOf(NotFoundException);
        expect(repository.getWithRepositories).toHaveBeenCalledWith(
          input.user_name,
        );
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
