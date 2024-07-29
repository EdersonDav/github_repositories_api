import { Module } from '@nestjs/common';
import { IGitHubProvider } from './interfaces/github/interface';
import { FakeGitHubProvider } from './fakes';

@Module({
  exports: [IGitHubProvider],
  providers: [
    {
      provide: IGitHubProvider,
      useClass: FakeGitHubProvider,
    },
  ],
})
export class MockGitHubModule {}
