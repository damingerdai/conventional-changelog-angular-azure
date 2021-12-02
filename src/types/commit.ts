import { Notes } from './note';
import { References } from './reference';

export type CommitType =
    | 'feat'
    | 'fix'
    | 'perf'
    | 'revert'
    | 'docs'
    | 'style'
    | 'refactor'
    | 'test'
    | 'build'
    | 'ci'

export type CommitGroupLabel =
    | 'Breaking'
    | 'Dependencies'
    | 'Docs'
    | 'Fixes'
    | 'Internals'
    | 'Misc'
    | 'Release'
    | 'Reverts'
    | 'Security'
    | 'Styles'
    | 'Types'
    | 'Updates'


export interface Commit {
    body: string | null;
    footer: string | null;
    header: string;
    mentions: string[];
    merge: string | null;
    notes: Notes;
    references: References;
    revert: { [key: string]: string } | null;
    subject: string;
    hash: string;
    hashLink: string;
    label: CommitGroupLabel;
    message: string;
    pr: string;
    scope: string;
    source: string;
    shortHash: string;
    type: CommitType | string;
}

export type Commits = Commit[];