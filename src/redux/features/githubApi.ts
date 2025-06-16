import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getRepos: builder.query<GitHubRepo[], void>({
      query: () => 'users/faisalnc/repos',
    }),
  }),
});

export const { useGetReposQuery } = githubApi;

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};
