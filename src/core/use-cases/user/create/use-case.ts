import { Injectable } from '@nestjs/common';
import { Output } from './output';
import { Input } from './input';
import { UserRepository } from '../../../../database/repositories/interfaces';

@Injectable()
export class CreateUser {
  constructor(private readonly repository: UserRepository) {}
  async execute({
    login,
    user_avatar_url,
    user_external_id,
  }: Input): Promise<Output> {
    const user_created = await this.repository.save({
      login: login,
      user_avatar_url: user_avatar_url,
      user_external_id: user_external_id,
    });
    return { data: user_created };
  }
}
