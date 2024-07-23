export class Output {
  data!: {
    user: {
      login?: string;
      avatar?: string;
      repositories: {
        repository_id?: number;
        name?: string;
        description?: string;
        url?: string;
        language?: string;
        created_at?: string;
      }[]
    };
  } | null
}