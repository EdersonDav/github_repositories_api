import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Input {
  @IsString()
  @IsNotEmpty()
  login!: string;

  @IsString()
  @IsNotEmpty()
  user_avatar_url!: string;

  @IsNumber()
  @IsNotEmpty()
  user_external_id!: number;
}