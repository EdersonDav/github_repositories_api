import { Controller, Param, Get } from '@nestjs/common';
import { SearchRepositories } from '../../../../core/use-cases/repository';
import { Response } from './dtos';
import { Params } from './params';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Repositories')
@Controller('repositories')
export class SearchRepositoriesController {
  constructor(private readonly use_case: SearchRepositories) {}

  @ApiOperation({
    summary: 'Search repositories',
    description: `
      This endpoint allows you to search for repositories on GitHub based on a search term provided.
    `,
  })
  @ApiOkResponse({
    type: Response,
    description: 'A successful response containing the list of found repositories.',
  })
  @Get('/search/:term')
  async get(
    @Param() params: Params,
  ): Promise<Response> {
    const {data} = await this.use_case.execute({
      term: params.term
    });

    return { data } as Response
  }
}