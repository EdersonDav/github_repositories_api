import { User } from '../../entities/user.entity';

export abstract class UserRepository {
  abstract save(user: Partial<User>): Promise<User>;
  abstract getWithRepositories(user: string): Promise<User | null>;
}
