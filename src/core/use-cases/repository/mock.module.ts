import { Module } from '@nestjs/common';
import { CreateRepository } from './create';
import { SearchRepositories } from './search-repositories';
import { MockDatabaseModule } from '../../../database/mock.module';

@Module({
  imports: [MockDatabaseModule],
  exports: [CreateRepository, SearchRepositories],
  providers: [CreateRepository, SearchRepositories],
})
export class MockRepositoryModule {}
