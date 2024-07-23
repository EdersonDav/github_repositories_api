import { Module } from '@nestjs/common';
import { HelloModuleModule } from './hello';
import { ImportModuleModule } from './import';
import { UserModuleModule } from './user';
import { DataBaseModule } from '../../database';

const modules = [HelloModuleModule, ImportModuleModule, UserModuleModule];

@Module({
  imports: [...modules, DataBaseModule],
  exports: modules,
})
export class UseCasesModule {}