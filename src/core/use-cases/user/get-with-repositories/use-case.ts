import { Injectable } from '@nestjs/common';
import { Output } from './output';
import { Input } from './input';
import { UserRepository } from '../../../../database/repositories/interfaces';

@Injectable()
export class GetWithRepositories {
  constructor(
    private readonly repository: UserRepository
  ) { }
  async execute({ user_name }: Input): Promise<Output> {
    const user = await this.repository.getWithRepositories(user_name);

    if(!user) return {data: null};

    const repositories = user?.repository?.length ? user.repository.map(repo => ({
      repository_id: repo.repository_external_id,
      name: repo.name,
      description: repo.description,
      url: repo.url,
      language: repo.language,
      created_at: repo.external_created_at
    })) : []; 

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