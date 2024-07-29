export class Output {
  data!: {
    repositories: {
      repository_id?: number;
      name?: string;
      description?: string;
      url?: string;
      language?: string;
      created_at?: string;
    }[];
  };
}
