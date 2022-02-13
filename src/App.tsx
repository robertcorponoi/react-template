import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/404Page";

import "./App.css";
import "tailwindcss/tailwind.css";
import ReduxPage from "./pages/ReduxPage";

const App = () => {
    return (
        /** 
         * We have to wrap the `App` in `BrowserRouter` to enable routing 
         * features such as defining routes and using the link component. 
         */
        <BrowserRouter>
            <div className="App">
                {
                    /**
                     * Anything defined above the `Routes` will be templated 
                     * into every page. This means that it is a perfect place 
                     * to put components such as navbar, footer, etc.
                     */
                }
                <Navbar />
                {
                    /**
                     * All of the routes within the application are defined 
                     * here. For more advanced routing, check out the 
                     * documentation at https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
                     */
                }
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/redux"
                        element={<ReduxPage />}
                    />
                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />
                    {
                        /**
                         * This is the catch-all route that will be shown 
                         * whenever the user attempts to visit a page that 
                         * doesn't exist.
                         */
                    }
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
