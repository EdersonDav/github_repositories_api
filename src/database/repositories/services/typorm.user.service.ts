import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository as TypeORMRepository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../interfaces';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly entity: TypeORMRepository<User>,
  ) {}

  async getWithRepositories(user: string): Promise<User | null> {
    const data = await this.entity.findOne({
      where: { login: ILike(`%${user}%`) },
      relations: ['repository'],
    });

    return data;
  }

  async save(user: Partial<User>): Promise<User> {
    const user_created = this.entity.create(user);
    await this.entity.upsert(user_created, {
      conflictPaths: ['login'],
      upsertType: 'on-conflict-do-update',
    });
    return user_created;
  }
}
