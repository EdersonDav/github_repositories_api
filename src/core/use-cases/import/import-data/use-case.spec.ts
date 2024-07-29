import { Test, TestingModule } from '@nestjs/testing';
import { Input } from './input';
import { Import } from './use-case';
import { faker } from '@faker-js/faker';
import { FakeGitHubProvider } from '../../../providers/github/fakes';

import { MockImportModule } from '../mock.module';
import { describe, beforeEach, it, expect, jest } from '@jest/globals';

import { CreateRepository } from '../../repository';

import { CreateUser } from '../../user';
import {
  IGitHubProvider,
  Repositories,
  User as UserFromProvider,
} from '../../../providers/github/interfaces';
import { User } from '../../../../database/entities';

describe('# Import Data', () => {
  let use_case: Import;

  let provider: FakeGitHubProvider;

  let create_repository: CreateRepository;
  let create_repository_execute: any;

  let create_user: CreateUser;
  let create_user_execute: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockImportModule],
    }).compile();

    use_case = module.get<Import>(Import);

    provider = module.get<FakeGitHubProvider>(IGitHubProvider);

    create_repository = module.get<CreateRepository>(CreateRepository);
    create_repository_execute = jest.spyOn(create_repository, 'execute');

    create_user = module.get<CreateUser>(CreateUser);
    create_user_execute = jest.spyOn(create_user, 'execute');
  });

  const input: Input = {
    user_name: faker.person.firstName(),
  };

  const user: UserFromProvider = {
    user_avatar_url: faker.internet.url(),
    user_login: faker.person.firstName(),
    user_external_id: 123456,
  };

  const fake_repository: Partial<Repositories> = {
    repository_external_id: 485646,
    created_at: new Date().toJSON(),
    language: 'JavaScript',
    name: faker.company.name(),
    url: faker.internet.url(),
  };

  const repositories = [fake_repository, fake_repository];

  const provider_result = {
    data: {
      user,
      repositories,
    },
  };

  const user_created = { data: user as Partial<User> };

  const repos = repositories.map((repo) => ({
    external_created_at: new Date(repo.created_at as string),
    language: repo.language,
    name: repo.name,
    repository_external_id: repo.repository_external_id,
    url: repo.url,
    description: repo.description,
    user: user_created.data,
  }));

  it.each([
    {
      run: true,
      should: 'Should be import user and repositories',
      input: () => input,
      setup: () => {
        provider.getUserAndRepositoriesData.mockResolvedValueOnce(
          provider_result,
        );
        create_user_execute.mockResolvedValueOnce(user_created);
        create_repository_execute.mockResolvedValueOnce(undefined);
      },
      expected: (output: any) => {
        expect(output).toStrictEqual({ data: 'user created' });
        expect(create_user_execute).toHaveBeenCalledWith({
          login: provider_result.data.user.user_login,
          user_avatar_url: provider_result.data.user.user_avatar_url,
          user_external_id: provider_result.data.user.user_external_id,
        });
        expect(create_repository_execute).toHaveBeenCalledWith({ data: repos });
      },
    },
  ])('$should', async ({ run, setup, input, expected }) => {
    if (!run) return;

    if (setup) setup();

    use_case
      .execute(input() as unknown as Input)
      .then(expected)
      .catch(expected);
  });
});
