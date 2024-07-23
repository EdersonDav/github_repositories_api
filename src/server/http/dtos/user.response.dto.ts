import { Expose } from "class-transformer";

export class UserResponse {
  @Expose()
  login?: string;

  @Expose()
  avatar?: string;
}