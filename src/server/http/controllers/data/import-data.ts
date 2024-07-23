import { Controller, Param, Post } from '@nestjs/common';
import { Import } from '../../../../core/use-cases/import';

@Controller('import-data')
export class ImportController {
  constructor(private readonly use_case: Import) {}

  @Post(':user_name')
  async import(@Param('user_name') user_name: string): Promise<{message: string}> {
    const {data} = await this.use_case.execute({
      user_name
    });

    return {message: data}
  }
}