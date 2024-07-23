import { Expose, Type } from "class-transformer";
import { RepositoryResponse } from "../../../dtos";

export class Data extends RepositoryResponse{}

export class Response {
    @Expose()
    @Type(() => Data)
    data!: Data
}