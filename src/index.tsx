import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./App";

import { store } from "./store/store";

/**
 * Tells React what to render and where to render it.
 *
 * In our case, we're rending our root `App` component to the DOM element with
 * the id of `root` in the `public/index.html` file.
 */

// The container to mount the React app to.
const container = document.getElementById("root");

// Create the root of the React app.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
);
