import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../../../../database/entities';
import { Type } from 'class-transformer';

export class Repository {
  @IsNumber()
  @IsNotEmpty()
  repository_external_id!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  url!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  language!: string;

  @IsDate()
  @IsNotEmpty()
  external_created_at!: Date;

  @Type(() => User)
  user!: User;
}

export class Input {
  @Type(() => Repository)
  data!: Repository[];
}
