import { User } from '../../entities/user.entity'

export abstract class UserRepository {
    abstract save(user: Partial<User>): Promise<User>;
    abstract find(user_id: string): Promise<User | null>;
}
  