# @cormaclc/react-starter

### TODO

* cypress integration tests (ci)
* state management?

### Scripts

* Run locally: `npm run dev`
* Linting: `npm run lint`
* Testing: `npm run test`

### Features

#### NextJS App

https://nextjs.org/docs

* Multipage app :white_check_mark:
  * Home page: `pages/index.tsx`
  * About pgae: `pages/about.tsx`

#### Linting

* Basic linting support with custom rules specified in .eslintrc :white_check_mark:
* Pre-commit linting with husky :white_check_mark:
* Extend from common libs :construction:

#### Unit Tests

* junit + testing library component unit tests :white_check_mark:
* Pre-push tests with husky :white_check_mark:
* Run as required pull-request check :white_check_mark:

#### Renovate

* Configured :white_check_mark:
  * dependency dashboard all updates 
  * open PRs for minor/patch updates (except node/npm)
