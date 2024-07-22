import { Module } from '@nestjs/common';
import { UseCasesModule } from './use-cases';
import { ProviderModule } from './providers/provider.module';

const modules = [UseCasesModule, ProviderModule];

@Module({
  imports: modules,
  exports: modules,
})
export class CoreModule {}