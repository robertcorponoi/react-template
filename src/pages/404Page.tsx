import React from "react";

import Container from "../components/Container";

/**
 * The page shown when the user attempts to visit a route that doesn't exist, 
 * meaning that it is not defined under the `Routes` in the `App.tsx` file.
 */
const NotFoundPage = () => {
    return (
        <Container>
            <h1>Page Not Found</h1>
        </Container>
    );
};

export default NotFoundPage;
