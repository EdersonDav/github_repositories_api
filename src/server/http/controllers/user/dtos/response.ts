import { Expose, Type } from "class-transformer";
import { RepositoryResponse, UserResponse } from "../../../dtos";

export class Data extends UserResponse{
    @Expose()
    @Type(() => RepositoryResponse)
    repositories?: RepositoryResponse[]
}

export class Response {
    @Expose()
    @Type(() => Data)
    data!: Data
}