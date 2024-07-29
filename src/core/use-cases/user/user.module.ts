import { Module } from '@nestjs/common';
import { CreateUser } from './create';
import { DataBaseModule } from '../../../database';
import { GetWithRepositories } from './get-with-repositories';

@Module({
  imports: [DataBaseModule],
  exports: [CreateUser, GetWithRepositories],
  providers: [CreateUser, GetWithRepositories],
})
export class UserModule {}
