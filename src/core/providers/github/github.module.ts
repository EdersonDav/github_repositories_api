import { Module } from '@nestjs/common';
import {
  GitHubBase,
  GitHubRepositoriesEndPoint,
  GitHubUserEndPoint,
} from './endpoints';
import { GitHubProvider } from './implementations';
import { IGitHubProvider } from './interfaces/github/interface';
import { ErrorHandler } from '../errors';

const endpoints = [GitHubRepositoriesEndPoint, GitHubUserEndPoint];

@Module({
  exports: [GitHubBase, ...endpoints, IGitHubProvider, ErrorHandler],
  providers: [
    GitHubBase,
    ErrorHandler,
    ...endpoints,
    {
      provide: IGitHubProvider,
      useClass: GitHubProvider,
    },
  ],
})
export class GitHubModule {}
