import { Controller, Param, Post } from '@nestjs/common';
import { Import } from '../../../../core/use-cases/import';
import { Params } from './params';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Import')
@Controller('import-data')
export class ImportController {
  constructor(private readonly use_case: Import) {}

  @ApiOperation({
    summary: 'Import users and associated repositories from GitHub',
    description: `
      This endpoint allows you to import information about a specific user and their associated repositories from GitHub.
    `,
  })
  @ApiOkResponse({
    description: 'A successful response containing a message',
  })
  @Post(':user_name')
  async import(
    @Param() params: Params,
  ): Promise<{message: string}> {
    const {data} = await this.use_case.execute({
      user_name: params.user_name
    });

    return {message: data}
  }
}
