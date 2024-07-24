import { Module } from '@nestjs/common';
import { MockGitHubModule } from './github/mock.module';

const modules = [MockGitHubModule];

@Module({
  exports: modules,
  imports: modules,
})
export class MockProviderModule {}
