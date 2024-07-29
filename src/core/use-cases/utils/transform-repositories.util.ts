import { Repository } from '../../../database/entities';

type RepositoryResult = {
  repository_id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  created_at: string;
};

export const transformRepositories = (
  repositories: Partial<Repository>[] | null,
): RepositoryResult[] => {
  if (!repositories?.length) return [];

  const result = repositories.map((repo) => ({
    repository_id: repo.repository_external_id,
    name: repo.name,
    description: repo.description,
    url: repo.url,
    language: repo.language,
    created_at: repo.external_created_at,
  }));

  return result as unknown as RepositoryResult[];
};
