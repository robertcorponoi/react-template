import React from "react";

import { useAppSelector } from "../hooks/stateHooks";

import { selectUserName } from "../store/user/selectors";

/**
 * Displays a greeting to the current user.
 */
const Greeting = () => {
    /** The name of the user. */
    const userName = useAppSelector(selectUserName);

    return <p className="text-3xl">Hello, {userName}</p>;
};

export default Greeting;
