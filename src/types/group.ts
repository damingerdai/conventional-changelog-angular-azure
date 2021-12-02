import { CommitGroupLabel, CommitType } from './commit';

export interface Group {
    bump?: 'major' | 'minor' | 'patch';
    emoji: string;
    label: CommitGroupLabel;
    types: string[];
}

export type Groups = Group[];