import { Groups } from './group';
export const COMMIT_FORMAT_PREFIX =
  /(feat|break|breaking|build|chore||ci|cd|deps|docs|feature|fix|internal|misc|new|patch|release|revert|security|style|styles|test|tests|type|types|update|perf|refactor)(?:\(([a-zA-Z0-9\-., ]+)\))?:/u;

export const GROUPS: Groups = [
  {
    bump: 'major',
    emoji: 'đĨ',
    label: 'Breaking',
    types: ['break', 'breaking'],
  },
  {
    bump: 'patch',
    emoji: 'đĻ',
    label: 'Dependencies',
    types: ['deps'],
  },
  {
    emoji: 'đ',
    label: 'Docs',
    types: ['docs'],
  },
  {
    bump: 'patch',
    emoji: 'đ',
    label: 'Fixes',
    types: ['fix', 'patch'],
  },
  {
    emoji: 'đ ',
    label: 'Internals',
    types: ['ci', 'cd', 'build', 'test', 'tests', 'internal'],
  },
  {
    bump: 'patch',
    emoji: 'đ',
    label: 'Misc',
    types: ['misc'],
  },
  {
    bump: 'major',
    emoji: 'đ',
    label: 'Release',
    types: ['release'],
  },
  {
    bump: 'patch',
    emoji: 'âŠī¸',
    label: 'Reverts',
    types: ['revert'],
  },
  {
    bump: 'patch',
    emoji: 'đ',
    label: 'Security',
    types: ['security'],
  },
  {
    bump: 'patch',
    emoji: 'đ¨',
    label: 'Styles',
    types: ['style', 'styles'],
  },
  {
    bump: 'patch',
    emoji: 'âī¸',
    label: 'Types',
    types: ['type', 'types'],
  },
  {
    bump: 'minor',
    emoji: 'đ',
    label: 'Updates',
    types: ['new', 'update', 'feature'],
  },
];