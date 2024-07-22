import { Module } from '@nestjs/common';
import { HelloController } from './hello';
import { CoreModule } from '../../../core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [HelloController],
})
export class ControllerModule {}