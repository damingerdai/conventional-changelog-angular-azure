# conventional-changelog-angular-azure

> [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) [azure](https://azure.microsoft.com/en-us/services/devops/repos/) preset

## Install

for npm user:

```
npm install conventional-changelog-cli  conventional-changelog-angular-azure --save-dev
```

for yarn user:

```
yarn add conventional-changelog-cli  conventional-changelog-angular-azure -D
```

for pnpm user:

```
pnpm add conventional-changelog-cli  conventional-changelog-angular-azure -D
```

## Configuration

due to the limit of [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog), we have to configurte the context. 

please add `conventinal-changelog-template.js` in project root path:

```JavaScript
module.exports = {
    repository: <YOUR_AZURE_REPOSITORY>,
    issueUrl: <YOUR_AZURE_WORK_ITEM>,
    commit: 'commit',
    issue: 'edit'
};
```

add script in `package.json`:

```shell
"changelog": "conventional-changelog --context conventinal-changelog-template.js -p angular-azure -i CHANGELOG.md -s",
"changelog:all": "conventional-changelog --context conventinal-changelog-template.js -p angular-azure -i CHANGELOG.md -s -r 0",
```

then we can cenerate a changelog from git metadata based [angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

## License

MIT © [明国宾](https://github.com/damingerdai)