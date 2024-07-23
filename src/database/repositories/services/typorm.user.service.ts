import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../interfaces';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly entity: Repository<User>,
  ) {}

  find(user_id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  async save(user: Partial<User>): Promise<User> {
    const user_created = this.entity.create(user);
    await this.entity.upsert(user_created, {conflictPaths: ['login'], upsertType: 'on-conflict-do-update'});
    return user_created;
  }
}