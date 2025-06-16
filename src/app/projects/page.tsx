'use client';

import { useGetReposQuery } from '@/redux/features/githubApi';

export default function ProjectsPage() {
  const { data: repos, isLoading, isError } = useGetReposQuery();

  return (
    <div className="p-6 max-w-6xl mx-auto bg-zinc-900 text-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">All Projects</h1>
      <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
        This page automatically lists all public repositories from my GitHub account.
        Each project highlights my work in frontend, backend, cybersecurity, and more.
      </p>

      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error loading repositories.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos?.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 rounded-xl p-5 shadow hover:shadow-md transition bg-zinc-800"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              {repo.name}
            </h2>
            <p className="text-gray-300 text-sm">
              {repo.description || "No description provided."}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/faisalnc"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
}
