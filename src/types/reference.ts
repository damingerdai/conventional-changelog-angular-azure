export interface Reference {
    action: string;
    owner: string | null;
    repository: string | null;
    issue: string;
    raw: string;
    prefix: string;
    issueLink: string;
    source: string;
}

export type References = Reference[];