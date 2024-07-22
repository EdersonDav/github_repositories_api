import axios, { AxiosInstance } from 'axios'
import { Injectable } from "@nestjs/common";
import { env } from '../../../../../config';

@Injectable()
export class GitHubBase {
    protected api: AxiosInstance;

    constructor(){
        this.api = axios.create({
            baseURL: env.api.PROVIDERS.GITHUB_URL,
        })
    }
}