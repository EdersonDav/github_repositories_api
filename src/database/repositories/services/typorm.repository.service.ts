import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeORMRepository } from 'typeorm';
import { Repository } from '../../entities';
import { RepositoryRepository } from '../interfaces';

@Injectable()
export class RepositoryService implements RepositoryRepository {
  constructor(
    @InjectRepository(Repository)
    private readonly entity: TypeORMRepository<Repository>,
  ) {}

  async saveMany(repositories: Partial<Repository>[]): Promise<void> {
    await this.entity.upsert(repositories, {conflictPaths: ['repository_external_id'], upsertType: 'on-conflict-do-update'});
  }
}