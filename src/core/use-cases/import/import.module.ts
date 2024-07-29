import { Module } from '@nestjs/common';
import { ProviderModule } from '../../providers/provider.module';
import { Import } from './import-data';
import { UserModule } from '../user';
import { RepositoryModule } from '../repository';

@Module({
  imports: [ProviderModule, UserModule, RepositoryModule],
  exports: [Import],
  providers: [Import],
})
export class ImportModule {}
