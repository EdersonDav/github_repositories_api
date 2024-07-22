import { Injectable } from "@nestjs/common";
import { Request } from './request'
import { Response, GithubResponse } from './response'
import { GitHubBase } from "../base";

@Injectable()
export class GitHubRepositories extends GitHubBase {
  async call({user}: Request): Promise<Response> {
    const { data } = await this.api.get<GithubResponse[]>(`/users/${user}/repos`);

    return { data }
  }

}