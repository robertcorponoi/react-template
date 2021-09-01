import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defines a type for the user slice state.
interface UserState {
    name: string,
}

// Defines the initial state using the `UserState` type.
const initialState: UserState = {
    name: "Bob",
};

/**
 * Automatically generates action creators and types that correspond to the 
 * reducers and state.
 */
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /**
         * Sets a new name for the user.
         * 
         * @param {UserState} state The user state.
         * @param {PayloadAction<string>} action The new name for the user.
         */
        setUserName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
})

/** Export our actions. */
export const { setUserName } = userSlice.actions;

export default userSlice.reducer;