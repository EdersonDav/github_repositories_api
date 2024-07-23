import { Controller, Param, Get } from '@nestjs/common';
import { GetWithRepositories } from '../../../../core/use-cases/user';
import { Response } from './dtos';

@Controller('user')
export class GetUserWithRepositoryController {
  constructor(private readonly use_case: GetWithRepositories) {}

  @Get(':user_name/repositories')
  async get(@Param('user_name') user_name: string): Promise<Response> {
    const {data} = await this.use_case.execute({
      user_name
    });

    return { data } as Response
  }
}