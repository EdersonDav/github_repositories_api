import { Controller, Param, Get } from '@nestjs/common';
import { SearchRepositories } from '../../../../core/use-cases/repository';
import { Response } from './dtos';

@Controller('repositories')
export class SearchRepositoriesController {
  constructor(private readonly use_case: SearchRepositories) {}

  @Get('/search/:term')
  async get(@Param('term') term: string): Promise<Response> {
    const {data} = await this.use_case.execute({
      term
    });

    return { data } as Response
  }
}