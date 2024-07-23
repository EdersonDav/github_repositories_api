import { Module } from '@nestjs/common';
import { CreateUser } from './create';
import { DataBaseModule } from '../../../database';

@Module({
  imports: [DataBaseModule],
  exports: [CreateUser],
  providers: [CreateUser],
})
export class UserModuleModule {}