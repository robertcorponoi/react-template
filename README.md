# React Template

An opinionated React template that helps you understand the workings of a React app without abstractions like `react-scripts`.

The template, which is by no means a perfect React development experience and is a work in progress, aims to be thoroughly documented to help you understand what goes on under the hood of a React app.

**Table of Contents**

- [Tools](#tools)
- [Visual Studio Code Extensions](#visual-studio-code-extensions)
- [Scripts](#scripts)
- [GitHub Actions](#github-actions)
- [License](#license)

## Tools

The following tools are used to build the React app and improve the development experience. These configuration files for these tools contain documentation to help you understand what each option does. More complex options will also contain a link to outside documentation that can explain it better.

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/docs/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Visual Studio Code Extensions

The follow extensions for code formatting and linting should be recommended to you if you open the project in Visual Studio Code:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Scripts

The following scripts are available and can be used in the form of `npm run [script_name]`:

- `develop` - This is the script to run when you are actively developing your React app. This will run the webpack dev server in development mode with fast refresh so you can save your changes and see them in real time without refreshing your app.

- `build:dev` - Creates a development build of your React app output to the `build` folder at the root directory.

- `build:prod` - Creates a production build of your React app output to the `build` folder at the root directory. This will minify bundles and purge unused classes from your code to create the smallest build possible.

- `analyze:dev` - Runs the Webpack bundle analyzer and provides you with a link that you can use to see what packages your Webpack bundle consists of.

- `analyze:prod` - Runs the Webpack bundle analyzer but in production mode which will minify scripts first and then provides you with a link that you can use to see what packages your Webpack bundle consists of.

## GitHub Actions

The workflow at `.github/workflows/build.yml` will run whenever a pull request is made.

This action will install the dependencies and attempt to create a production build of the React app.

More actions are planned to be added for deployment of the app.

## License

[MIT](./LICENSE)
