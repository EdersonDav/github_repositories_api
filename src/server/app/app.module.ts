import { Module } from '@nestjs/common';
import { ControllerModule } from '../http/controllers';
import { DataBaseModule } from '../../database';

@Module({
  imports: [ControllerModule, DataBaseModule],
})
export class AppModule {}
