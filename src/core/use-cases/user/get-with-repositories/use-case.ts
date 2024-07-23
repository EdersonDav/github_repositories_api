import { Injectable } from '@nestjs/common';
import { Output } from './output';
import { Input } from './input';
import { UserRepository } from '../../../../database/repositories/interfaces';
import { transformRepositories } from '../../utils';

@Injectable()
export class GetWithRepositories {
  constructor(
    private readonly repository: UserRepository
  ) { }
  async execute({ user_name }: Input): Promise<Output> {
    const user = await this.repository.getWithRepositories(user_name);

    if(!user) return {data: []};

    const repositories = user?.repository?.length ? transformRepositories(user?.repository) : []; 

    const data = {
      user:{
        login: user?.login,
        avatar: user?.user_avatar_url,
        repositories
      }
    }

    return {data} as Output
  }
}