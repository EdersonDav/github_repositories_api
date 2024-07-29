import { IGitHubProvider } from '../interfaces';

export class FakeGitHubProvider implements IGitHubProvider {
  getUserAndRepositoriesData = jest.fn();
}
