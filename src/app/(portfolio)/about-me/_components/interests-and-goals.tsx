import { ChevronDown } from 'lucide-react';
import { ProjectCard } from '~/components/project-card';
import { H2, P } from '~/components/typography';
import { Button } from '~/components/ui/button';
import githubData from '../../../../../data/github-data.json';
import Link from 'next/link';

export function InterestsAndGoals() {
  return (
    <div className="py-20">
      <H2 className="w-full text-center">Interests and Goals</H2>
      <div className="mb-10">
        <P className="text-center text-sm text-secondary-foreground">
          {
            "I'm passionate about technology, enjoy crafting full-stack projects, fueling my creativity and technical growth."
          }
        </P>
        <P className="text-center text-sm text-secondary-foreground">
          {"Here are the top projects I've worked on."}
        </P>
        <div>
          {githubData?.data?.topTwoProjects.map((repo, index) => {
            return <ProjectCard key={index} {...repo} />;
          })}
        </div>
        <div className="mb-2 flex justify-center">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="rounded-full">
              View All Projects
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
