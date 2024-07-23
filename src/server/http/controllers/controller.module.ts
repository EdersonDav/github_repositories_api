import { Module } from '@nestjs/common';
import { HelloController } from './hello';
import { ImportController } from './data';
import { CoreModule } from '../../../core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [HelloController, ImportController],
})
export class ControllerModule {}