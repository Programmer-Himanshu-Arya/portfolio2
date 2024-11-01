type ContributionDay = {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
};

export type ContributionCalendar = {
  colors: string[];
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
  firstDay: string;
};

type ContributionsCollection = {
  contributionCalendar: ContributionCalendar;
};

type CommitNode = {
  committedDate: string;
  message: string;
  url: string;
};

type CommitHistory = {
  edges: { node: CommitNode }[];
};

type DefaultBranchRef = {
  target: {
    history: CommitHistory;
  };
};

type PrimaryLanguage = {
  name: string;
  color: string;
};

export type RepositoryNode = {
  nameWithOwner: string;
  description: string | null; // Description might be null if not specified
  avatarUrl: string;
  url: string;
};

type TopRepositories = {
  nodes: RepositoryNode[];
};

type User = {
  name: string;
  issues: { totalCount: number };
  pullRequests: { totalCount: number };
  url: string;
  repositoriesContributedTo: { totalCount: number };
  topRepositories: TopRepositories;
  contributionsCollection: ContributionsCollection;
};

export type Data = {
  user: User;
};
