import { UserRepository } from '../interfaces/user.repository';

export class FakeUserRepository implements UserRepository {
  save = jest.fn();
  getWithRepositories = jest.fn();
}