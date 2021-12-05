import * as shell from 'shelljs';

import { gitDummyCommit } from './git-dummy-commit';

describe('git dummy commit unit test', () => {
    beforeAll(() => {
        shell.rm('-rf', 'tmp');
        shell.mkdir('tmp');
        shell.cd('tmp');
        shell.exec('git init');
    })

    it('Create dummy commits', () => {
        gitDummyCommit('awesome commit');
        expect(shell.exec('git log').stdout).toMatch(/\sawesome commit\s/);

        gitDummyCommit();
        expect(shell.exec('git log').stdout).toMatch(/\sTest commit\s/);

        gitDummyCommit([]);
        expect(shell.exec('git log').stdout).toMatch(/\sTest commit[\w\W]*Test commit\s/);

        gitDummyCommit('     ');
        expect(shell.exec('git log').stdout).toMatch(/\sTest commit[\w\W]*Test commit[\w\W]*Test commit\s/);

        gitDummyCommit('');
        expect(shell.exec('git log').stdout).toMatch(/\sTest commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/);

        gitDummyCommit(['unicorns', 'rainbows']);
        expect(shell.exec('git log').stdout).toMatch(/\sunicorns\s/);
        expect(shell.exec('git log').stdout).toMatch(/\srainbows\s/);

        gitDummyCommit(['', 'balloons']);
        expect(shell.exec('git log').stdout).toMatch(/Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/);
        expect(shell.exec('git log').stdout).toMatch(/\sballoons\s/);
    })

    afterAll(() => {
        shell.cd('..')
        shell.rm('-rf', 'tmp');
    })
})