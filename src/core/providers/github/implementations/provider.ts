import { Injectable } from "@nestjs/common";
import { IGitHubProvider, Request, Response } from "../interfaces/github";
import { GitHubRepositoriesEndPoint, GitHubUserEndPoint } from "../endpoints";

@Injectable()
export class GitHubProvider implements IGitHubProvider {
  constructor(
    private readonly gitHubRepositoriesEndpoint: GitHubRepositoriesEndPoint,
    private readonly gitHubUserEndpoint: GitHubUserEndPoint,
  ) { }
    async getUserAndRepositoriesData({ user }: Request): Promise<Response> {
        const [user_response, repositories_response] = await Promise.all([
            this.gitHubUserEndpoint.call({user}),
            this.gitHubRepositoriesEndpoint.call({user})
        ]);

        const data ={
            user:{
                user_login: user_response.data.login,
                user_external_id: user_response.data.id,
                user_avatar_url: user_response.data.avatar_url,
            },
            repositories: repositories_response.data.map(repo => ({
                repository_external_id: repo.id,
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                created_at: repo.created_at,
                language: repo.language
            }))
        }

        return {data}

    }
}