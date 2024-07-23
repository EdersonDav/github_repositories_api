import { Module } from '@nestjs/common';
import { GitHubModule } from './github/github.module';

const modules = [GitHubModule];

@Module({
  exports: modules,
  imports: modules,
})
export class ProviderModule {}
