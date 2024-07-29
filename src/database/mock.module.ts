import { Module } from '@nestjs/common';
import {
  FakeRepositoryRepository,
  FakeUserRepository,
} from './repositories/fakes';
import {
  UserRepository,
  RepositoryRepository,
} from './repositories/interfaces';

@Module({
  providers: [
    FakeUserRepository,
    {
      provide: UserRepository,
      useClass: FakeUserRepository,
    },
    FakeRepositoryRepository,
    {
      provide: RepositoryRepository,
      useClass: FakeRepositoryRepository,
    },
  ],
  exports: [
    UserRepository,
    FakeUserRepository,
    FakeRepositoryRepository,
    RepositoryRepository,
  ],
})
export class MockDatabaseModule {}
