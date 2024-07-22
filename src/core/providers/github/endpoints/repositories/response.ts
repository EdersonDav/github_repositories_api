export class Owner {
    login!: string;
    id!: number;
    avatar_url!: string;
}

export class GithubResponse {
    id!: number;
    name!: string;
    owner!: Owner;
    html_url!: string;
    description?: string;
    created_at!: string;
    language!: string;
}
  
export class Response {
    data!: GithubResponse[]
}