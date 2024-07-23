import { Injectable } from '@nestjs/common';
import { IGitHubProvider } from '../../../providers/github'
import { Output } from './output';
import { Input } from './input';
import { CreateUser } from '../../user';
import { CreateRepository } from '../../repository';

@Injectable()
export class Import {
  constructor(
    private readonly provider: IGitHubProvider,
    private readonly createUser: CreateUser,
    private readonly createRepository: CreateRepository,
  ) { }
  async execute({ user_name }: Input): Promise<Output> {
    const {data: {repositories, user}} = await this.provider.getUserAndRepositoriesData({user: user_name})
    
    const user_created = await this.createUser.execute({
      login: user.user_login,
      user_avatar_url: user.user_avatar_url,
      user_external_id: user.user_external_id
    });

    const repos = repositories.map(repo => ({
      external_created_at: new Date(repo.created_at),
      language: repo.language,
      name: repo.name,
      repository_external_id: repo.repository_external_id,
      url: repo.url,
      description: repo.description,
      user: user_created.data
    }));

    await this.createRepository.execute({data: repos})
    
    return {data: 'user created'}
  }
}