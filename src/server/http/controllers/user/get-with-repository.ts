import { Controller, Param, Get } from '@nestjs/common';
import { GetWithRepositories } from '../../../../core/use-cases/user';
import { UserResponse } from './dtos';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Params } from './params';

@ApiTags('User')
@Controller('user')
export class GetUserWithRepositoryController {
  constructor(private readonly use_case: GetWithRepositories) {}

  @ApiOperation({
    summary: 'Retrieve User and your repositories',
    description: `
      This endpoint allows you to retrieve information about a specific user and their associated repositories.
    `,
  })
  @ApiOkResponse({
    type: UserResponse,
    description: 'A successful response containing the user\'s profile information and their list of repositories.',
  })
  @Get(':user_name/repositories')
  async get(
    @Param() params: Params,
  ): Promise<UserResponse> {
    const {data} = await this.use_case.execute({
      user_name: params.user_name
    });

    return { data } as UserResponse
  }
}