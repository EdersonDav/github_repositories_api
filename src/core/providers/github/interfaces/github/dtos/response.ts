export class Repositories {
  repository_external_id!: number;
  name!: string;
  url!: string;
  description?: string;
  created_at!: string;
  language!: string;
}

export class User {
  user_login!: string;
  user_external_id!: number;
  user_avatar_url!: string;
}

export class UserRepositories {
  user!: User;
  repositories!: Repositories[];
}

export class Response {
  data!: UserRepositories
}


