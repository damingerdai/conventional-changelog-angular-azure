import { COMMIT_FORMAT_PREFIX, ParserOptions } from './types';

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
