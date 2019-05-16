# react-redux-boilerplate

A complete `react` boilerplate application with the following provided and configured out-of-the-box:
 - `redux` for state management
 - `redux-thunk` for async redux actions
 - `@reach/router` for application level routing
 - `webpack` with `webpack-dev-server` for transpiling/bundling
 - `dotenv` for environment configuration
 - `eslint` with `eslint-config-airbnb` for static code analysis
 - `prettier` for pretty code
 - `jest` for testing

 ## Getting Started

 To get started, you can either clone this repository and make a copy of the code, or use `degit` to do this for you which will result in a clean copy of the project with none of the git history (i.e. no `.git` folder).

 To get started, run:
 ```
npx degit tomglenn/react-redux-boilerplate my-project-name
 ```

 Once you have a copy of the boilerplate, you can run the following to open the app:
 ```
npm install
npm run dev
 ```

 ## Available commands

The following `npm` scripts are available:

`dev` - Runs `webpack-dev-server`

`dev:open` - Runs `webpack-dev-server` and opens the browser

`build` - Builds the `bundle.js` file via Webpack

`test` - Runs the Jest test suite

`lint` - Runs eslint to check for errors

## Application structure

The following is the application structure:

 - `public`
   - `index.html`
   - `assets/bundle.js` - Built via `build`
 - `src`
   - `components` - Global app components
   - `features` - Application features
     - `home` - The Home feature
     - `about` - The About feature
   - `state` - Application state handling
     - `counter` - The sample counter state
       - `actions.js` - The counter actions
       - `reducer.js` - The counter reducer
   - `App.js` - The root application component
   - `index.js` - The application bootstrapper

## Setting environment variables

This boilerplate uses `dotenv` and `dotenv-webpack` to allow environment variables to be passed to the application code. In order to make use of this, simply create a `.env` file at the root of the project and add your environment variables in `KEY=value` format.

It is recommended that you **do not** commit your `.env` file.

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)
