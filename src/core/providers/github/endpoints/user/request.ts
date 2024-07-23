import { IsNotEmpty, IsString } from "class-validator";

export class Request {
  @IsString()
  @IsNotEmpty()
  user!: string
}