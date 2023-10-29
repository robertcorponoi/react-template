import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

import "tailwindcss/tailwind.css";

const App = () => {
    return (
            <div className="App">
                <Navbar />
                {
                    /**
                     * Anything defined above the `Outlet` will be templated 
                     * into every page. This means that it is a perfect place 
                     * to put components such as navbar, footer, etc.
                     */
                }
                <Outlet />
            </div>
    );
};

export default App;
