import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RepositoryResponse {
  @Expose()
  @ApiProperty({ example: 4568, description: 'Id repository GitHub' })
  repository_id?: number;

  @Expose()
  @ApiProperty({
    example: 'Example Name',
    description: 'Name of the repository',
  })
  name?: string;

  @Expose()
  @ApiProperty({
    example: 'An example description',
    description: 'Description of the repository',
  })
  description?: string;

  @Expose()
  @ApiProperty({
    example: 'https://github.com/example/repo',
    description: 'URL of the repository',
  })
  url?: string;

  @Expose()
  @ApiProperty({
    example: 'JavaScript',
    description: 'Programming language used in the repository',
  })
  language?: string;

  @Expose()
  @ApiProperty({
    example: '2023-04-01T00:00:00Z',
    description: 'Date the repository was created',
  })
  created_at?: Date;
}
