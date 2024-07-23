import { Injectable } from "@nestjs/common";
import { Request } from './request'
import { Response, User } from './response'
import { GitHubBase } from "../base";

@Injectable()
export class GitHubUserEndPoint extends GitHubBase {
  async call({user}: Request): Promise<Response> {
    const { data } = await this.api.get<User>(`/users/${user}`);

    return { data }
  }

}