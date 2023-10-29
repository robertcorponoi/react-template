import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./store/store";

/**
 * Tells React what to render and where to render it.
 *
 * In our case, we're rending our root `App` component to the DOM element with
 * the id of `root` in the `public/index.html` file.
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);
