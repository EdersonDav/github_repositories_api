import { Injectable } from '@nestjs/common';
import { Input } from './input';
import { RepositoryRepository } from '../../../../database/repositories/interfaces';

@Injectable()
export class CreateRepository {
  constructor(private readonly repository: RepositoryRepository) {}
  async execute(input: Input): Promise<void> {
    await this.repository.saveMany(input.data);
  }
}
