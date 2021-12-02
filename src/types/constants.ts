import { Groups } from './group';
export const COMMIT_FORMAT_PREFIX =
  /(feat|break|breaking|build|chore||ci|cd|deps|docs|feature|fix|internal|misc|new|patch|release|revert|security|style|styles|test|tests|type|types|update|perf|refactor)(?:\(([a-zA-Z0-9\-., ]+)\))?:/u;

export const GROUPS: Groups = [
  {
    bump: 'major',
    emoji: '💥',
    label: 'Breaking',
    types: ['break', 'breaking'],
  },
  {
    bump: 'patch',
    emoji: '📦',
    label: 'Dependencies',
    types: ['deps'],
  },
  {
    emoji: '📘',
    label: 'Docs',
    types: ['docs'],
  },
  {
    bump: 'patch',
    emoji: '🐞',
    label: 'Fixes',
    types: ['fix', 'patch'],
  },
  {
    emoji: '🛠',
    label: 'Internals',
    types: ['ci', 'cd', 'build', 'test', 'tests', 'internal'],
  },
  {
    bump: 'patch',
    emoji: '📋',
    label: 'Misc',
    types: ['misc'],
  },
  {
    bump: 'major',
    emoji: '🎉',
    label: 'Release',
    types: ['release'],
  },
  {
    bump: 'patch',
    emoji: '↩️',
    label: 'Reverts',
    types: ['revert'],
  },
  {
    bump: 'patch',
    emoji: '🔑',
    label: 'Security',
    types: ['security'],
  },
  {
    bump: 'patch',
    emoji: '🎨',
    label: 'Styles',
    types: ['style', 'styles'],
  },
  {
    bump: 'patch',
    emoji: '⚙️',
    label: 'Types',
    types: ['type', 'types'],
  },
  {
    bump: 'minor',
    emoji: '🚀',
    label: 'Updates',
    types: ['new', 'update', 'feature'],
  },
];