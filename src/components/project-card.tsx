import { RepositoryNode } from '~/types/github-data';
import { H4 } from './typography';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import React from 'react';

type ProjectCardProps = RepositoryNode;

export function ProjectCard({ nameWithOwner, description, url, avatarUrl }: ProjectCardProps) {
  return (
    <div className="py-2 md:p-2">
      <div className="relative space-y-1 overflow-hidden rounded-md bg-muted/50 p-3 md:p-4">
        <div className="absolute -bottom-2 -right-10 text-primary opacity-5 md:-right-10 md:bottom-0 md:p-4">
          <FaGithub className="size-36" />
        </div>
        <div className="relative flex gap-2">
          <div
            className="absolute left-0 h-24 w-20 rounded-full bg-cover opacity-50 blur-3xl"
            style={{ backgroundImage: `url(${avatarUrl})` }}
          />
          <Image
            src={avatarUrl}
            alt={nameWithOwner}
            width={50}
            height={50}
            className="relative z-10 mr-1 size-14 flex-shrink-0 rounded-md shadow md:mr-2 md:size-20"
          />
          <div className="z-10 flex-grow overflow-hidden">
            <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
              <a
                className="w-fit font-medium text-secondary-foreground transition-colors hover:text-primary"
                href={url}
              >
                <p className="w-fit text-sm md:text-base">{nameWithOwner}</p>
              </a>
            </div>
            {description && (
              <H4
                title={description}
                className="w-[95%] text-wrap text-sm font-normal text-muted-foreground"
              >
                {description}
              </H4>
            )}
            <div className="group cursor-pointer gap-5 pt-1 text-xs text-orange-200 underline-offset-2 hover:underline md:pt-0 md:text-sm">
              <a href={url} target="_blank">
                live site{' '}
                <ArrowUpRight
                  size={20}
                  className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
