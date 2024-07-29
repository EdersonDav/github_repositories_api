import { Injectable } from '@nestjs/common';
import { Request } from './request';
import { Response, Repository } from './response';
import { GitHubBase } from '../base';
import { ErrorHandler } from '../../../errors';

@Injectable()
export class GitHubRepositoriesEndPoint extends GitHubBase {
  constructor(private readonly errorHandler: ErrorHandler) {
    super();
  }

  async call({ user }: Request): Promise<Response> {
    try {
      const { data } = await this.api.get<Repository[]>(`/users/${user}/repos`);
      return { data };
    } catch (error) {
      throw this.errorHandler.handle(error, 'GitHub');
    }
  }
}
