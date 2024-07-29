import { Module } from '@nestjs/common';
import { CreateUser } from './create';
import { GetWithRepositories } from './get-with-repositories';
import { MockDatabaseModule } from '../../../database/mock.module';

@Module({
  imports: [MockDatabaseModule],
  exports: [CreateUser, GetWithRepositories],
  providers: [CreateUser, GetWithRepositories],
})
export class MockUserModule {}
