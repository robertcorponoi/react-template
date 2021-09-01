import React, { useMemo, useState } from "react";

import { setUserName } from "../store/user/userSlice";
import { selectUserName } from "../store/user/selectors";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";

/**
 * An input that allows the user to change their name.
 */
const NameChange = () => {
    const dispatch = useAppDispatch();

    /** The name of the user. */
    const userName = useAppSelector(selectUserName);

    /** The name of the user in the input, defaulting to the user name. */
    const [inputUserName, setInputUserName] = useState<string>(userName);

    /**
     * Indicates whether the user can use the "Submit" button to change their
     * name or not. This is only true if the name in the input is different
     * than the name in the state.
     */
    const canChangeName = useMemo(
        () => userName !== inputUserName,
        [userName, inputUserName],
    );

    /**
     * Called when the name of the user is updated in the input to update the
     * name in the local state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event The change event.
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setInputUserName(event.target.value);

    /**
     * Called when the "Submit" button is pressed to set the new name for the
     * user in the store.
     */
    const handleNameChange = () => dispatch(setUserName(inputUserName));

    return (
        <div className="flex flex-col mt-4">
            <p>Don't like the name {userName}? Change It!</p>
            <div className="flex items-center gap-x-2 mt-3">
                <input
                    onChange={handleInputChange}
                    value={inputUserName}
                    className="border border-gray-400 rounded p-2"
                />
                <button
                    onClick={handleNameChange}
                    disabled={!canChangeName}
                    className={`${
                        canChangeName ? "bg-blue-500" : "bg-gray-400"
                    } text-white py-2 px-4 rounded`}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NameChange;
