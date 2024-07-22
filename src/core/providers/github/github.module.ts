import { Module } from "@nestjs/common";
import { GitHubBase, GitHubRepositories } from "./endpoints";

@Module({
    exports: [GitHubBase, GitHubRepositories],
    providers: [GitHubBase, GitHubRepositories]
})
export class GitHubModule { }