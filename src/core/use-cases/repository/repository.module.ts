import { Module } from '@nestjs/common';
import { CreateRepository } from './create';
import { SearchRepositories } from './search-repositories';
import { DataBaseModule } from '../../../database';

@Module({
  imports: [DataBaseModule],
  exports: [CreateRepository, SearchRepositories],
  providers: [CreateRepository, SearchRepositories],
})
export class RepositoryModule {}
