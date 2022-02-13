# React Template

An opinionated React template that helps you understand the workings of a React app without abstractions like `react-scripts`.

The template, which is by no means a perfect React development experience and is a work in progress, aims to be thoroughly documented to help you understand what goes on under the hood of a React app.

**Table of Contents**

- [Tools](#tools)
- [Visual Studio Code Extensions](#visual-studio-code-extensions)
- [Concepts](#concepts)
    - [Routing](#routing)
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

## Concepts

The following are concepts used throughout the App. This documentation is a work in progress so check back regularly for updates or post an issue for a concept that you think is missing documentation.

### Routing

The routing for the app is handled with [react-router](https://github.com/remix-run/react-router). More specifically, we use react-router-dom v6, which has helpful documentation [here](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md).

The routing for the app is fairly simple. The various parts are explained below:

- In the `src/App.tsx` file, we we everything in a `BrowserRouter` component. This component is from `react-router-dom` and it is used to connect it to our app's browser URL. Every `<Route>` and `<Link>` component has to be defined within this component so putting it as the wrapper to everything else in the `<App>` is how we achieve that.

- Also in the `src/App.tsx` file, we define our `<Route>` components within a `<Routes>` component, both from `react-router-dom`. This is where we define the routes of the application. Here we have two simple routes to route to our home and about pages. Each `<Route>` takes the route and component to render when that route is navigated to. We also have a third route, which is a catch-all route that will be used whenever the user navigates to a route that is not defined. We put a 404 page here in the template but you can handle it any way you wish.

- In the `src/components/Navbar.tsx` component, we create a simple navbar that has the links for the application as `<Link>` components, which are from `react-router-dom`. 

**Note:** Notice that in the `src/App.tsx` file, the `<Navbar>` component is outside of the `<Routes>` component. Anything outside of the `<Routes>` component will be displayed on every route so it is a good place to put a navbar, footer, or anything else that should appear on every page.

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
