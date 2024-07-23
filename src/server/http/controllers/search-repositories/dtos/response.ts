import { Expose, Type } from "class-transformer";
import { RepositoryResponse } from "../../../dtos";
import { ApiProperty } from "@nestjs/swagger";

export class DataRepository extends RepositoryResponse{}

export class Response {
    @ApiProperty({ description: 'Data repositories response', isArray: true })
    @Expose()
    @Type(() => DataRepository)
    data!: DataRepository
}