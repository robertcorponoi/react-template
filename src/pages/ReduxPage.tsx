import React from "react";

import Greeting from "../components/Greeting";
import Container from "../components/Container";
import NameChange from "../components/NameChange";

/**
 * A page to show a simple example of Redux used to say a greeting.
 * 
 * This will display "Hello, Bob" until the user changes the name using the 
 * input. When the "Submit" button is pressed, it will update the name in the 
 * state and the greeting will be updated with the new value in the state.
 */
const ReduxPage = () => {
    return (
        <Container>
            <div className="flex flex-col">
                <Greeting />
                <NameChange />
            </div>
        </Container>
    );
};

export default ReduxPage;
