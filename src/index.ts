import { conventionalChangelog } from './conventional-changelog';
import { recommendedBumpOpts } from './conventional-recommended-bump';
import { parserOpts } from './types';
import { writerOpts } from './writer-opts';

const config = Promise.resolve({
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
});

module.exports = config;