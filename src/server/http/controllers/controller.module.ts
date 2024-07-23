import { Module } from '@nestjs/common';
import { HelloController } from './hello';
import { ImportController } from './data';
import { CoreModule } from '../../../core/core.module';
import { GetUserWithRepositoryController } from './user';
import { SearchRepositoriesController } from './search-repositories';

@Module({
  imports: [CoreModule],
  controllers: [HelloController, ImportController, GetUserWithRepositoryController, SearchRepositoriesController],
})
export class ControllerModule {}