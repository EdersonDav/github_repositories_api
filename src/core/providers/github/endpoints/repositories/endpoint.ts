import { Injectable } from "@nestjs/common";
import { Request } from './request'
import { Response, Repository } from './response'
import { GitHubBase } from "../base";

@Injectable()
export class GitHubRepositoriesEndPoint extends GitHubBase {
  async call({user}: Request): Promise<Response> {
    const { data } = await this.api.get<Repository[]>(`/users/${user}/repos`);

    return { data }
  }

}