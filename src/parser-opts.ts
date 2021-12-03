import { COMMIT_FORMAT_PREFIX, ParserOptions } from './types';

export const parserOpts: Partial<ParserOptions> = {
    headerCorrespondence: ['azure', 'type', 'scope', 'message'],
    // Keep in sync with checkCommitFormat
    headerPattern: new RegExp(`^(Merged? PR \\d+: )?${COMMIT_FORMAT_PREFIX.source} (.*)$`, 'u'),
    mergeCorrespondence: ['id', 'source'],
    mergePattern: /^Merged PR (\\d+)/u,

    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'Note'],
    revertCorrespondence: ['header'],
    revertPattern: /^Revert\s"(.*)"?/u,
    referenceActions: ['Related work items:', 'close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved']
};
