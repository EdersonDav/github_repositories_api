import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Params {
  @ApiProperty({
    description: 'The user name from github',
    required: true,
    nullable: false,
  })
  @IsString()
  user_name!: string;
}
