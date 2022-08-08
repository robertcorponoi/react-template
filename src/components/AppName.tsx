import React from "react";

/**
 * A component that outputs the `REACT_APP_NAME` environment variable if
 * available.
 */
const AppName = () => {
    /** The value of the `REACT_APP_NAME` environment variable. */
    const { REACT_APP_NAME } = process.env;

    return REACT_APP_NAME ? (
        <p>{REACT_APP_NAME}</p>
    ) : (
        <p>
            This is where the name of the React App would display if you set up
            a .env file with an environment variable consisting of
            REACT_APP_NAME = &quot;App Name&quot;
        </p>
    );
};

export default AppName;
