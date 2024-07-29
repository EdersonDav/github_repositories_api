import { Module } from '@nestjs/common';
import { Import } from './import-data';
import { MockDatabaseModule } from '../../../database/mock.module';
import { MockRepositoryModule } from '../repository/mock.module';
import { MockUserModule } from '../user/mock.module';
import { MockProviderModule } from '../../providers/mock.module';

@Module({
  imports: [
    MockProviderModule,
    MockUserModule,
    MockRepositoryModule,
    MockDatabaseModule,
  ],
  exports: [Import],
  providers: [Import],
})
export class MockImportModule {}
