import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Params {
  @ApiProperty({
    description: 'The term for search repositories',
    required: true,
    nullable: false,
  })
  @IsString()
  term!: string;
}
