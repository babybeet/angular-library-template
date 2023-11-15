# angular-library-template [![](https://circleci.com/gh/babybeet/angular-library-template.svg?style=svg&logo=appveyor)](https://app.circleci.com/pipelines/github/babybeet/angular-library-template?branch=main)

This template includes the following features:

- [ESLint](https://eslint.org/) for both TypeScript and HTML templates.
- [Husky](https://typicode.github.io/husky/).
- [lint-staged](https://www.npmjs.com/package/lint-staged) that will run ESLint, Prettier and a custom script to automatically re-generate the table of contents on every commit.
- [Prettier](https://prettier.io/).
- CI/CD with [CircleCI](https://circleci.com/). The pipeline has been set up to lint the source code, run all tests, build, then deploy the final package to NPM registry.

## Table of contents

<!-- toc -->

- [Angular compatibility](#angular-compatibility)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [Configurations](#configurations)
  - [Development](#development)
  - [Testing](#testing)
    - [Unit testing](#unit-testing)
    - [Visual testing](#visual-testing)
- [Building and publishing](#building-and-publishing)

<!-- tocstop -->

## Angular compatibility

| This library | Angular |
| ------------ | ------- |
| 1.x.x        | 16 - 18 |

<!-- Remove this once ready to publish

## Installation

- `npm`

  ```
  npm i -S @babybeet/angular-library-template
  ```

- `pnpm`

  ```
  pnpm i -S @babybeet/angular-library-template
  ```

- `yarn`

  ```
  yarn add @babybeet/angular-library-template
  ```
-->

## How to use

### Configurations

- Find-and-replace all instances of `angular-library-template` with your library's name.
- Rename folder `angular-library-template` inside `projects` to the your library name.
- Update all component prefixes from `lc` to your own choosing.
- Within your CircleCI's `Organization Settings`, add a new context named `npm`, and add an environment variable named `NPM_TOKEN` to that context to publish the built package to npm.
- Add an SSH user key to your CircleCI project so that version commits can be pushed into your remote repository.
- Create a project level environment variable named `GH_KEY` that contains the fingerprint for the SSH user key created above so that CircleCI can commit back to your repository on Github when the versioning job runs.

### Development

To develop your library code, just add changes to **lib** folder.

Be sure to add anything that you'd like to export to **public-api.ts** file, or else, nothing can be imported from your library.

### Testing

#### Unit testing

Execute `pnpm test` to run all of your unit tests in watch mode, or `pnpm test:ci` to run it in non-watch mode.

#### Visual testing

To visually check your components/directives, you can import them into `projects/visual-test` app and use the imported symbols as normal. Changes made to your library code will also cause the visual app to auto-reload after running `pnpm start` at the root of the product directory which will start a regular Angular app on http://localhost:4200.

## Building and publishing

Before you publish your library, you should update your README file (Be sure to not change the `## Table of contents` section as this is updated automatically by a script that runs on every commit hook) and choose an appropriate software license. Anything added to **README.md** file will be copied to the final distribution inside **dist/your-library-name** folder to be published to the npm registry, additionally, the **LICENSE** file and **package.json** file inside **projects/your-library-name** folder will also be copied to distribution folder, so make sure you configure your **package.json** accordingly.
