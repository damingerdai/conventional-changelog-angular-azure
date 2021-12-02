import { Commits, SemverLevel } from './types';
import { parserOpts } from './parser-opts';

const whatBump = (commits: Commits) => {
    let level: SemverLevel = 2
    let breakings: number = 0
    let features: number = 0

    commits.forEach(commit => {
      if (commit.notes.length > 0) {
        breakings += commit.notes.length
        level = 0
      } else if (commit.type === 'feat') {
        features += 1
        if (level === 2) {
          level = 1
        }
      }
    })

    return {
      level: level,
      reason: breakings === 1
        ? `There is ${breakings} BREAKING CHANGE and ${features} features`
        : `There are ${breakings} BREAKING CHANGES and ${features} features`
    }
}

export const recommendedBumpOpts = {
    parserOpts,
    whatBump
}