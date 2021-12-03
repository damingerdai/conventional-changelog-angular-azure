import compareFunc from 'compare-func';
import * as fs from 'fs';
import * as path from 'path';

import { Commit, Context, Reference, WriterOptions } from './types';

const { SYSTEM_TASKDEFINITIONSURI } = process.env;

function createWorkItemLink(workItemId: string) {
    const serverUrl = SYSTEM_TASKDEFINITIONSURI!;

    if (workItemId) {
        return new URL(`/_workitems/edit/${workItemId}`, serverUrl).toString();
    }

    return '';
}

function createLink(paths: string[], context: Context, reference: Partial<Reference> = {}): string {
    const owner = reference.owner ?? context.owner;
    const repository = reference.repository ?? context.repository;
    const url: string[] = [];

    if (repository) {
        if (context.host) {
            url.push(context.host);
        }

        if (owner) {
            url.push(owner);
        }

        url.push(repository);
    } else {
        url.push(context.repoUrl);
    }
    let base = url.join('/');

    // If deep linking to a sub-folder (monorepo project, etc),
    // extract the base URL if possible.
    [
        // github, gitlab
        'tree',
        'blob',
        // bitbucket
        'src',
    ].forEach((browsePart) => {
        if (base.includes(`/${browsePart}/`)) {
            [base] = base.split(`/${browsePart}/`);
        }
    });

    return [base, ...paths].join('/');
}

const transform = (commit: Commit, context: Context) => {
    let discard = true
    const issues = []

    commit.notes.forEach(note => {
        note.title = 'BREAKING CHANGES'
        discard = false
    })

    if (commit.type === 'feat') {
        commit.type = 'Features'
    } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes'
    } else if (commit.type === 'perf') {
        commit.type = 'Performance Improvements'
    } else if (commit.type === 'revert' || commit.revert) {
        commit.type = 'Reverts'
    } else if (discard) {
        return
    } else if (commit.type === 'docs') {
        commit.type = 'Documentation'
    } else if (commit.type === 'style') {
        commit.type = 'Styles'
    } else if (commit.type === 'refactor') {
        commit.type = 'Code Refactoring'
    } else if (commit.type === 'test') {
        commit.type = 'Tests'
    } else if (commit.type === 'build') {
        commit.type = 'Build System'
    } else if (commit.type === 'ci') {
        commit.type = 'Continuous Integration'
    }

    if (commit.scope === '*') {
        commit.scope = ''
    }

    if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7)
    }

    commit.references.forEach((reference) => {
        // Azure devops
        if (SYSTEM_TASKDEFINITIONSURI) {
            reference.issueLink = createWorkItemLink(reference.issue);
        } else {
            reference.issueLink = createLink([context.issue, reference.issue], context, reference);
        }

        let source = `${reference.repository ?? ''}#${reference.issue}`;

        if (reference.owner) {
            source = `${reference.owner}/${source}`;
        }

        reference.source = source;
    });

    // Link users
    if (context.host) {
        commit.message = commit.message.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/gu,
            (match, username: string, index: number) => {
                if (
                    username.includes('/') ||
                    // Avoid when wrapped in backticks (inline code)
                    commit.message.charAt(index - 1) === '`' ||
                    commit.message.charAt(index + match.length + 1) === '`'
                ) {
                    return match;
                }

                return `[@${username}](${context.host}/${username})`;
            },
        );
    }
    return commit;
}

export const writerOpts: Partial<WriterOptions> = {
    mainTemplate: fs.readFileSync(path.join(__dirname, '../templates/template.hbs'), 'utf-8'),
    commitPartial: fs.readFileSync(path.join(__dirname, '../templates/commit.hbs'), 'utf-8'),
    headerPartial: fs.readFileSync(path.join(__dirname, '../templates/header.hbs'), 'utf-8'),
    footerPartial: fs.readFileSync(path.join(__dirname, '../templates/footer.hbs'), 'utf-8'),
    transform,
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    notesSort: compareFunc
}