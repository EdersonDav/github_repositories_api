import { RepositoryRepository } from '../interfaces';

export class FakeRepositoryRepository implements RepositoryRepository {
  saveMany = jest.fn();
  search = jest.fn();
}
