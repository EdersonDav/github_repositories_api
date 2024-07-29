import { Module } from '@nestjs/common';
import { ImportModule } from './import';
import { UserModule } from './user';
import { DataBaseModule } from '../../database';
import { RepositoryModule } from './repository';

const modules = [ImportModule, UserModule, RepositoryModule];

@Module({
  imports: [...modules, DataBaseModule],
  exports: modules,
})
export class UseCasesModule {}
