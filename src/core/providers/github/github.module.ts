import { Module } from "@nestjs/common";
import { GitHubBase, GitHubRepositoriesEndPoint, GitHubUserEndPoint } from "./endpoints";
import { GitHubProvider } from "./implementations";
import { IGitHubProvider } from "./interfaces/github/interface";

const endpoints = [
    GitHubRepositoriesEndPoint,
    GitHubUserEndPoint
];

@Module({
    exports: [GitHubBase, ...endpoints, IGitHubProvider],
    providers: [
        GitHubBase,
        ...endpoints,
        {
            provide: IGitHubProvider,
            useClass: GitHubProvider,
        },
    ]
})
export class GitHubModule { }