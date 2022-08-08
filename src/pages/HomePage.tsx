import React from "react";

import AppName from "../components/AppName";
import Container from "../components/Container";

/**
 * The page that the application starts on.
 */
const HomePage = () => {
    return (
        <Container className="flex flex-col gap-y-2">
            <AppName />
            <p>Welcome to my opinionated React template.</p>
            <p>
                In the navbar, check out the Redux page for a simple Redux
                example involving a greeting and a name saved in the store.
                There&apos;s also an empty About page to demonstrate routing.
            </p>
        </Container>
    );
};

export default HomePage;
