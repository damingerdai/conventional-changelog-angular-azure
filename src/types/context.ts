import { CommitGroupLabel } from './commit';

export interface Context {
    commit: string;
    date: string;
    host: string;
    isPatch: boolean;
    isMinor: boolean;
    isMajor: boolean;
    issue: string;
    linkReferences: boolean;
    options: { [key: string]: unknown };
    owner: string;
    repository: string;
    repoUrl: string;
    title: string;
    version: string;
    headerLevel?: '#' | '##' | '###';
    groupEmojis?: { [K in CommitGroupLabel]: string };
  }