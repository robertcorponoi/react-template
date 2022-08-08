# React Template

An opinionated React template that helps you understand the workings of a React app without abstractions like `react-scripts`.

The template, which is by no means a perfect React development experience and is a work in progress, aims to be thoroughly documented to help you understand what goes on under the hood of a React app.

**Table of Contents**

-   [Tools](#tools)
-   [Visual Studio Code Extensions](#visual-studio-code-extensions)
-   [Concepts](#concepts)
    -   [Routing](#routing)
    -   [TailwindCSS](#tailwindcss)
    -   [Environment Variables](#environment-variables)
-   [Scripts](#scripts)
-   [GitHub Actions](#github-actions)
-   [Keeping Up To Date With Template Changes](#keeping-up-to-date-with-template-changes)
-   [License](#license)

## Tools

The following tools are used to build the React app and improve the development experience. These configuration files for these tools contain documentation to help you understand what each option does. More complex options will also contain a link to outside documentation that can explain it better.

-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/docs/en/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)

## Visual Studio Code Extensions

The follow extensions for code formatting and linting should be recommended to you if you open the project in Visual Studio Code:

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Concepts

The following are concepts used throughout the App. This documentation is a work in progress so check back regularly for updates or post an issue for a concept that you think is missing documentation.

### Routing

The routing for the app is handled with [react-router](https://github.com/remix-run/react-router). More specifically, we use react-router-dom v6, which has helpful documentation [here](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md).

The routing for the app is fairly simple. The various parts are explained below:

-   In the `src/App.tsx` file, we we everything in a `BrowserRouter` component. This component is from `react-router-dom` and it is used to connect it to our app's browser URL. Every `<Route>` and `<Link>` component has to be defined within this component so putting it as the wrapper to everything else in the `<App>` is how we achieve that.

-   Also in the `src/App.tsx` file, we define our `<Route>` components within a `<Routes>` component, both from `react-router-dom`. This is where we define the routes of the application. Here we have two simple routes to route to our home and about pages. Each `<Route>` takes the route and component to render when that route is navigated to. We also have a third route, which is a catch-all route that will be used whenever the user navigates to a route that is not defined. We put a 404 page here in the template but you can handle it any way you wish.

-   In the `src/components/Navbar.tsx` component, we create a simple navbar that has the links for the application as `<Link>` components, which are from `react-router-dom`.

**Note:** Notice that in the `src/App.tsx` file, the `<Navbar>` component is outside of the `<Routes>` component. Anything outside of the `<Routes>` component will be displayed on every route so it is a good place to put a navbar, footer, or anything else that should appear on every page.

## TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is an opinionated way of styling your components. Instead of using CSS files or passing styles in as JavaScript objects, Tailwind lets you apply styles via class names. Simple class names such as `flex items-center` allow you to easily apply styles directly in the markup. Tailwind also makes responsive styling easy by use of breakpoints. A simple example is text that is larger as the screen size increases like so: `text-sm md:text-base lg:text-lg xl:text-xl`.

You might find that the default Tailwind values aren't enough for your application. A common example is needing more colors than are provided by Tailwind. This can be accomplished by extending the `tailwind.config.js` file as shown in the [configuration documentation](https://tailwindcss.com/docs/configuration).

You can also use Tailwind configuration values by importing the Tailwind config from the utils. This enables you to use any custom styles you passed to the configuration file and also the default Tailwind styles. An example of getting a color from the Tailwind config looks like:

```ts
import tailwindConfig from "../path/to/utils/tailwind-config";

// This will log the default Tailwind gray 500 color.
console.log(tailwindConfig.theme.colors.gray["500"]);
```

We also use [PostCSS](https://postcss.org/) to purge the Tailwind config so that any unused class names are removed from the final build of your application, which keeps styling bundle sizes to a minimum.

## Environment Variables

Environment variables in a `.env` file at the root of the template will be read into the React app. To demonstrate, there is a component under `src/components/AppName.tsx` that will read the environment variable `REACT_APP_NAME` if available. To make this component display the app name you need to:

1. Create a `.env` file at the root of the template.
2. Create a key value pair of `REACT_APP_NAME = "My App Name"`.
3. Run `npm run develop` to run the Webpack build again. On the home page you should now see the value you assigned to that key in the `.env` file.

**How It Works:**

-   The line `require("dotenv").config({ path: path.join(__dirname, ".env") });` requires the [dotenv](https://github.com/motdotla/dotenv) package which is a package used to load the variables from the `.env` file.
-   Then, in the `plugins` section we have:

```js
new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env),
}),
```

which maps the environment variables loaded in to `process.env` which can be used in components.

-   In the `src/components/AppName.tsx` component, we destructure the `process.env` object to get the key that we want to display and then we render it if available.

## Scripts

The following scripts are available and can be used in the form of `npm run [script_name]`:

-   `develop` - This is the script to run when you are actively developing your React app. This will run the webpack dev server in development mode with fast refresh so you can save your changes and see them in real time without refreshing your app.

-   `build:dev` - Creates a development build of your React app output to the `build` folder at the root directory.

-   `build:prod` - Creates a production build of your React app output to the `build` folder at the root directory. This will minify bundles and purge unused classes from your code to create the smallest build possible.

-   `analyze:dev` - Runs the Webpack bundle analyzer and provides you with a link that you can use to see what packages your Webpack bundle consists of.

-   `analyze:prod` - Runs the Webpack bundle analyzer but in production mode which will minify scripts first and then provides you with a link that you can use to see what packages your Webpack bundle consists of.

## GitHub Actions

The workflow at `.github/workflows/build.yml` will run whenever a pull request is made.

This action will install the dependencies and attempt to create a production build of the React app.

More actions are planned to be added for deployment of the app.

## Keeping Up To Date With Template Changes

This template will be updated when dependencies need updating, new packages are added, and new or better concepts are found. To keep up with changes you might want from the template:

1. Add the template repository as a remote:

```sh
git remote add template git@github.com:robertcorponoi/react-template.git
```

2. Fetch the changes:

```sh
git fetch --all
```

3. Merge the changes from the main branch of the template repository:

```sh
git merge template/main
```

## Dependabot

This template uses [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates) to automatically update out of date packages. The configuration for depedabot can be found at `.github/dependabot.yml`.

See the documentation linked above for more information about Dependabot and how to use it.

## License

[MIT](./LICENSE)
