import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../config';
import { UserService, RepositoryService } from './repositories/services';
import { UserRepository, RepositoryRepository } from './repositories/interfaces';
import { Repository, User } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.db.HOST,
      port: env.db.PORT,
      database: env.db.NAME,
      entities: [User, Repository],
      password: env.db.PASSWORD,
      username: env.db.USER,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Repository]),
  ],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserService,
    },
    RepositoryService,
    {
      provide: RepositoryRepository,
      useClass: RepositoryService,
    },
  ],
  exports: [UserRepository, UserService, RepositoryService, RepositoryRepository],
})
export class DataBaseModule {}