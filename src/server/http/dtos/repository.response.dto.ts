import { Expose } from "class-transformer";

export class RepositoryResponse {
  @Expose()
  repository_id!: number;

  @Expose()
  name!: string;

  @Expose()
  description?: string;

  @Expose()
  url!: string;

  @Expose()
  language?: string;

  @Expose()
  created_at!: Date;
}