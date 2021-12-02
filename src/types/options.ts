import { Commit, CommitGroupLabel, Commits } from './commit';
import { Context } from './context';
import { Note, Notes } from './note';
import { Pattern } from './pattern';
import { Sorter } from "./sort";


export type Correspondence = string[] | string;

export interface ParserOptions {
    fieldPattern: Pattern;
    headerPattern: Pattern;
    headerCorrespondence: Correspondence;
    issuePrefixes: string[] | string;
    mergePattern: Pattern;
    mergeCorrespondence: Correspondence;
    noteKeywords: string[] | string;
    referenceActions: string[] | string | null;
    revertPattern: Pattern;
    revertCorrespondence: Correspondence;
    warn: boolean | (() => void);
}

export interface WriterOptions {
    commitGroupsSort: Sorter<{
        title: CommitGroupLabel;
        commits: Commits;
    }>;
    commitPartial: string;
    commitsSort: Sorter<Commit>;
    debug: () => void;
    doFlush: boolean;
    finalizeContext:
    | ((context: Context, options: WriterOptions, commits: Commit[], keyCommit: Commit) => Context)
    | undefined;
    footerPartial: string;
    generateOn:
    | string
    | ((commit: Commit, commits: Commit[], context: Context, options: WriterOptions) => unknown);
    groupBy: string;
    headerPartial: string;
    ignoreReverted: boolean;
    includeDetails: boolean;
    mainTemplate: string;
    noteGroupsSort: Sorter<{
        title: string;
        notes: Notes;
    }>;
    notesSort: Sorter<Note>;
    partials: { [key: string]: unknown };
    reverse: boolean;
    transform: (commit: Commit, context: Context) => Commit | undefined;
}