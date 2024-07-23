import { Module } from '@nestjs/common';
import { ProviderModule } from '../../providers/provider.module';
import { Import } from './import-data';
import { UserModuleModule } from '../user';
import { RepositoryModule } from '../repository';

@Module({
  imports: [ProviderModule, UserModuleModule, RepositoryModule],
  exports: [Import],
  providers: [Import],
})
export class ImportModuleModule {}