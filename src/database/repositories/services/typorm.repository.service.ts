import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository as TypeORMRepository } from 'typeorm';
import { Repository } from '../../entities';
import { RepositoryRepository } from '../interfaces';

@Injectable()
export class RepositoryService implements RepositoryRepository {
  constructor(
    @InjectRepository(Repository)
    private readonly entity: TypeORMRepository<Repository>,
  ) {}

  async search(term: string): Promise<Repository[] | null> {
    const repositories = await this.entity.find({
      where: {
        name: ILike(`%${term}%`)
      },
    })

    return repositories
  }

  async saveMany(repositories: Partial<Repository>[]): Promise<void> {
    await this.entity.upsert(repositories, {conflictPaths: ['repository_external_id'], upsertType: 'on-conflict-do-update'});
  }
}