import { Test, TestingModule } from '@nestjs/testing';
import { Input } from './input';
import { randomUUID } from 'crypto';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { CreateUser } from './use-case';
import { FakeUserRepository } from '../../../../database/repositories/fakes';
import { faker } from '@faker-js/faker';

import { MockUserModule } from '../mock.module';
import { UserRepository } from '../../../../database/repositories/interfaces';
import { User } from '../../../../database/entities';

describe('# Create User', () => {
  let use_case: CreateUser;
  let repository: FakeUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockUserModule],
    }).compile();

    use_case = module.get<CreateUser>(CreateUser);
    repository = module.get<FakeUserRepository>(UserRepository);

  });

  const input: Input = {
    login: 'JohnDoe',
    user_avatar_url: faker.internet.url(),
    user_external_id: faker.number.int()
  };

  const entity: Partial<User> = {
    id: randomUUID(),
  };

  it.each([
    {
      run: true,
      should: 'Should be able to create a new user',
      input: () => input,
      setup: () => {
        repository.save.mockResolvedValueOnce(entity);
      },
      expected: (output: any) => {
        expect(output).toStrictEqual({ data: entity });
        expect(repository.save).toHaveBeenCalledWith({
          login: input.login,
          user_avatar_url: input.user_avatar_url,
          user_external_id: input.user_external_id
        });
      },
    },
  ])('$should', async ({ run, setup, input, expected }) => {
    if (!run) return;

    if (setup) setup();

    use_case.execute(input() as unknown as Input).then(expected).catch(expected);
  });
});
