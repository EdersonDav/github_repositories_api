import { Repository } from '../../entities/repository.entity'

export abstract class RepositoryRepository {
    abstract saveMany(repositories: Partial<Repository>[]): Promise<void>;
    abstract search(term: string): Promise<Repository[] | null>;
}
  