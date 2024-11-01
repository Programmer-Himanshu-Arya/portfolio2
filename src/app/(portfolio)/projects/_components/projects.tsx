'use client';
import { A, H1, H3, P } from '~/components/typography';
import { ProjectCard } from '~/components/project-card';
import githubData from '../../../../../data/github-data.json';
import { Input } from '~/components/ui/input';
import { FaGithub } from 'react-icons/fa6';
import { useCallback, useState } from 'react';
import { Footer } from '~/components/navigation/footer';

export function Projects() {
  const allProjects = githubData.data.totalProjects;

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchQuery = e.target.value.toLowerCase().trim();
      setSearchQuery(searchQuery);
      setFilteredProjects(
        allProjects.filter(
          (repo) =>
            repo.nameWithOwner.toLowerCase().includes(searchQuery) ||
            repo.description?.toLowerCase().includes(searchQuery),
        ),
      );
    },
    [allProjects],
  );

  return (
    <main className="flex justify-center px-4 md:container">
      <section className="mt-10 flex w-full max-w-3xl flex-col">
        <H1>Projects</H1>
        <P>Here are some of the projects I have worked on / contributed to.</P>
        <p className="py-1">
          <A href="https://github.com/CodeDevArya" className="text-sm">
            <FaGithub className="mr-2 inline-block flex-shrink-0" />
            View all projects with their source code on Github
          </A>
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Input
            placeholder="Search projects"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full border-2 border-primary/50 text-xl"
          />
        </div>
        {searchQuery.length > 0 && (
          <P className="text-center text-secondary-foreground">
            Showing results for {`'${searchQuery}'`}
          </P>
        )}
        <div className="mt-4">
          {filteredProjects.length === 0 && (
            <div className="p-10 text-center text-lg font-bold text-secondary-foreground opacity-75 md:text-xl">
              <H3>{'No projects found :('}</H3>
            </div>
          )}
          {filteredProjects.map((repo, index) => (
            <ProjectCard key={index} {...repo} />
          ))}
        </div>
        <Footer />
      </section>
    </main>
  );
}
