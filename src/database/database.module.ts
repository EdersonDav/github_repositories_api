import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../config'

const providers: Provider[] = [];

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: env.db.HOST,
    port: env.db.PORT,
    database: env.db.NAME,
    entities: [],
    password: env.db.PASSWORD,
    username: env.db.USER,
    synchronize: true
  })],
  exports: providers,
  providers: [
    ...providers,
  ],
})
export class DataBaseModule {}
