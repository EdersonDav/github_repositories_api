import { Module } from "@nestjs/common";
import { GitHubBase, GitHubRepositoriesEndPoint, GitHubUserEndPoint } from "./endpoints";

@Module({
    exports: [GitHubBase, GitHubRepositoriesEndPoint, GitHubUserEndPoint],
    providers: [GitHubBase, GitHubRepositoriesEndPoint, GitHubUserEndPoint]
})
export class GitHubModule { }