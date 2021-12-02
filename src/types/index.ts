import { COMMIT_FORMAT_PREFIX } from './constants';
import { ParserOptions } from './options';

export * from './commit';
export * from './constants';
export * from './context';
export * from './note';
export * from './options';
export * from './pattern';
export * from './reference';
export * from './semver-level';
export * from './semver-level';
export * from './sort';


export const parserOpts: Partial<ParserOptions> = {
    headerCorrespondence: ['azure', 'type', 'scope', 'message'],
    // Keep in sync with checkCommitFormat
    headerPattern: new RegExp(`^(Merged? PR \\d+: )?${COMMIT_FORMAT_PREFIX.source} (.*)$`, 'u'),
    mergeCorrespondence: ['id', 'source'],
    mergePattern: /^Merge pull request #(\\d+) from (.*)/u,

    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'Note'],
    revertCorrespondence: ['header'],
    revertPattern: /^Revert\s"(.*)"?/u,
};
