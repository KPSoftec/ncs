# React-Boiler-Plate (1.0)
An React boilerplate app using React UI for CAT Tribe

## Table of Contents

- [Scripts](#scripts)
  - [Main Dev Scripts](#main-dev-scripts)
  - [Basic Dev Flow](#basic-dev-flow)
- [Application Architecture](#application-architecture)

## Scripts

### Main Dev Scripts

* `yarn start` or `node yarn-local.js start` (Run the local browser-sync development environment with mountebank)
* `yarn start:wp:dev:server` or `node yarn-local.js start:wp:dev:server` (Run the local webpack dev server development environment)
* `yarn bs:start` or `node yarn-local.js bs:start` (Run the local browser-sync development environment)
* `yarn prod` or `node yarn-local.js prod` (Create the production package)
* `yarn build` or `node yarn-local.js build` (Create the production package)
* `yarn dll` or `node yarn-local.js dll` (Generate the DLL bundle)
* `yarn format` or `node yarn-local.js format` (Fix minor lint issues on styles and scripts)
* `yarn lint` or `node yarn-local.js lint` (Check the code style for styles and scripts)
* `yarn test` or `node yarn-local.js test` (Run all unit tests)
* `yarn update:cache` or `node yarn-local.js update:cache` (Delete yarn cache, node_modules and cache packages and install fresh package)
* `yarn e2e` or `node yarn-local.js e2e` (to run system test i.e. e2e automation)
* `yarn reports:clean` or `node yarn-local.js reports:clean` (to clean reports folder created by system test)
* `yarn report` or `node yarn-local.js report` (to generate allure report in html processed format)

### Basic Dev Flow

1. Run `yarn dll` (this will only need to be done once at the start, and then you will be prompted when you need to run again due to updates)
2. Run `yarn start`
3. Update the code
4. Track your changes using git
5. If you have commitizen installed globally you can run `git cz`, otherwise run `yarn cz` to commit your code. Configured values wil help you add commit message in a interactive way.
6. Push your code

Any changes will be watched and auto refreshed in the browser

Tests and linting will be run before your commit message is accepted

Linting will also be run per file change on your development local server

If you wish to add a new package you can do so by below command
```sh
yarn add <package>
```
OR

for dev dependencies
```sh
yarn add <package> -D
```


To update packages
```sh
yarn upgrade 
```

## Application Architecture

> * Application build scripts, dev scripts, prod scripts and ci scripts methods are listed and all prod / dev dependecies listed in package.json
> * ci-scripts -> Holds are ci scripts
> * config -> holds all the config files required for build, dev run, stubs, unit test and automation configs
> * * browser-sync - holds cz commit config file to help better commit message design
> * * * bs-config.js -> broser-sync config file, its used for local dev build to acehive cross browser sync
> * * cz-customizable - holds cz commit config file to help better commit message design
> * * helpers/
> * * * api-paths.js -> api domain names and api context path based on environment
> * * * api-uris.js -> api uri configuration for all the apis used in the application
> * * * dev-proxies.js -> proxy rewrite config used in dev / local build
> * * * environments.js -> list of environemnt names used for deployment
> * * * file-exists.js -> helper function for build script
> * * * index.js -> common file to export all build helper functions in one place
> * * * root.js -> helper function for build script
> * * * write-file.js -> helper function for build script
> * * jest/
> * * * config.json -> jest config file with custom config for this project
> * * * enzymeAdapter.js -> helper adapter function for enzyme used along with jest
> * * * resultProcessor.js -> custom jest result processor to use jest result output in sonarqube
> * * mountebank/
> * * * stubs/ -> holds all the stubs of api mocks, index.js is root file which will return the combined list of all the mock files
> * * * config.js -> holds config details of mountebank
> * * storybooks/ -> config files related to storybooks, but this feature isn't used extensively
> * * wdio/ -> holds config file for Webderiver IO, seperate config for local and CI
> * * webpack/
> * * * base-config.js -> webpack base config required for both dev and prod build
> * * * dev-config.js -> webpack config specific for dev build
> * * * dll-config.js -> conifg to clear dll of dependecies used only in dev build
> * * * prod-config.js -> config specific for prod build
> * * .eslintrc.js -> eslint config for js file used within config folder
> * * environment-properties.js -> environment config used based on dev or ci environment
> * npm-packages-offline-cache/ all npm packages are cached and pused to git
> * reports/ reports of unit test, automation test, error screen shots are stored here
> * src/ all application specific code and file
> * * app/ js code and styles
> * * * components/ react components and code
> * * * * App.jsx -> main react component which holds all the state route logic and challenge framework logic, basically global react life cycle related stuff is handled here
> * * * * history.js -> history api instance for router and logic to handle state change
> * * * * Root.jsx -> Root react component with wrapper of app, redux store and react router
> * * * * common/ -> will hold all common dumb components which can be injected and used in required feature components.
> * * * * <Feature>/
> * * * * *  index.js -> based on feature this will have connect methods of redux store to components, but if component is pretty small then will be whole component logic along with connect methods
> * sed command for linux and mac has certain differnce this is updated in build task of CI uDeploy snapshot version change

## Folder Structure

After creation, your project should look like this:

```
REACT-BOILER-PLATE/
  package.json
  README.md
  ci-scripts/
  config/
    cz-customizable/
    browser-sync/
    helpers/
    jest/
    mountebank
      stubs/
    wdio/ 
    webpack/
  node_modules/
  npm-packages-cache/
  reports/
    coverage/
      jest/
    systemTest/
      allure-results/
      cucumber/
      cucumber-results/
      json-results/
      junit-results/
    unit/
  selenium-drivers/
  src/
    app/
      components/
        common/
          <dumb/common> components/
        <feature> components/
          index.jsx
          index.spec.jsx
          enhancer.js
          <feature>.jsx
          <feature>.spec.jsx
          styles.js
          types.js
        <Root> component/
          index.jsx
          index.spec.jsx
          styles.js
          types.js
        Screens/
          <feature> components/
            index.jsx
            index.spec.jsx
            enhancer.js
            <feature>.jsx
            <feature>.spec.jsx
            styles.js
            types.js
      index.jsx
      store.js
      constant/resources/
        globalConstants.js
        regexConstants.js
      reducers/
        <featureBasedAction>Reducer/
          index.js
          index.spec.js
        index.js
        index.spec.js
      sagas/
        <actionBased>
          index.js
          index.spec.js
        index.js
        rootSaga.spec.js
      style/
        <animation>styles.js
        <content>styles.js
        <global>.js
        <globalstyles>.js
        <styles>.js
      utils/
        <apiConfig>.js
        <device>.js
        <formatData>.js
        <globalJSMethods>.js
        <history>.js
        <sessionStorage>.js
        <utils>.js
      index.jsx
      store.js
    assets/
      fonts/
      img/
        background/
        banner/
        darkmode/
        lightmode/
        lottie-icons/
        react/
    side-effects/
      <analytics>.js
    index.html
  test/
  <.cz-config>.js
  <.eslint/eslintignore>.js
  <.gitignore>
  <.huskyrc>
  <.npmrc>
  <.yarnrc>
  <sonar-scanner>.properties
  <stylelint.config>.js
  <webpack.config>.js
  <yarn-local>.js
  <yarn>.lock
```



Below are the details related to differnt types of commits

https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/leonardoanalista/corp-semantic-release)
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=007dba&colorA=db748e)](https://github.com/styled-components/styled-components)

### Basic System Test Flow

1. Run `yarn dll` (this will only need to be done once at the start, and then you will be prompted when you need to run again due to updates)
2. Run `yarn serve:build:mock`
3. Run `yarn in:sele` (For fresh npm install or npm install --offline, this will only need to be done when you run step -> 1, else step -> 4)
4. Run `yarn sele:start`.
5. Run `yarn system:test`.
6. Test your code
