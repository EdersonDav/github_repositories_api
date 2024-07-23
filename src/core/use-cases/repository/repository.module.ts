import { Module } from '@nestjs/common';
import { CreateRepository } from './create';
import { DataBaseModule } from '../../../database';

@Module({
  imports: [DataBaseModule],
  exports: [CreateRepository],
  providers: [CreateRepository],
})
export class RepositoryModule {}