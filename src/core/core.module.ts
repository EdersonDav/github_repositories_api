import { Module } from '@nestjs/common';
import { UseCasesModule } from './use-cases';
import { ProviderModule } from './providers/provider.module';
import { DataBaseModule } from '../database';

const modules = [UseCasesModule, ProviderModule];

@Module({
  imports: [...modules, DataBaseModule],
  exports: modules,
})
export class CoreModule {}
