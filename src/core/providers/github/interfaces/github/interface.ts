import { Request, Response } from './dtos';

export abstract class IGitHubProvider {
  abstract getUserAndRepositoriesData(request: Request): Promise<Response>;
}
