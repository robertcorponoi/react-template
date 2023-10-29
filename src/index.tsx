import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";

import HomePage from "./pages/HomePage";
import ReduxPage from "./pages/ReduxPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/404Page";

import { store } from "./store/store";

// Creates the routes for the app.
export const router = createBrowserRouter([
    {
        /**
         * The `App` component contains the template used by every page page 
         * so all pages will be rendered inside of it. There is an 
         * `<Outlet />` component inside of it that determines where the 
         * content of each page will be rendered.
         */
        path: "/",
        element: (
            <App />
        ),
        children: [
            {
                path: "",
                element: (
                    <HomePage />
                ),
            },
            {
                path: "redux",
                element: (
                    <ReduxPage />
                ),
            },
            {
                path: "about",
                element: (
                    <AboutPage />
                ),
            },
        ]
    },
    {
        /**
         * This route will be rendered if no other route matches the URL.
         */
        path: "*",
        element: (
            <NotFoundPage />
        )
    }
])

// The container to mount the React app to.
const container = document.getElementById("root");

// Create the root of the React app.
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
