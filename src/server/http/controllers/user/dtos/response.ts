import { Expose, Type } from "class-transformer";
import { RepositoryResponse } from "../../../dtos";
import { ApiProperty } from "@nestjs/swagger";

export class UserResponseData{
    @Expose()
    @ApiProperty({ example: 'octocat', description: 'GitHub username' })
    login?: string;

    @Expose()
    @ApiProperty({ example: 'https://github.com/octocat.png', description: 'Link to the user\'s profile picture' })
    avatar?: string;

    @ApiProperty({ description: 'Repositories Data', type: [RepositoryResponse] })
    @Expose()
    @Type(() => RepositoryResponse)
    repositories?: RepositoryResponse[]
}

export class UserResponse {
    @ApiProperty({ description: 'Data user and repositories response' })
    @Expose()
    @Type(() => UserResponseData)
    data!: UserResponseData
}