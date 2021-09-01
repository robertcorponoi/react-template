import React from "react";

import Greeting from "./components/Greeting";
import NameChange from "./components/NameChange";

import "./App.css";
import "tailwindcss/tailwind.css";

const App = () => {
    return (
        <div className="App">
            <div className="flex flex-col">
                <Greeting />
                <NameChange />
            </div>
        </div>
    );
};

export default App;
