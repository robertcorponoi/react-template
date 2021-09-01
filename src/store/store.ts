import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user/userSlice";

/**
 * An abstraction over the standard Redux `createStore` function that adds good
 * defaults to the store setup for a better development experience.
 */
export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: [
        // Redux-thunk allows us to write action creators that return a function
        // instead of an action. This can be used to delay the dispatch of an
        // action or dispatch only if a certain condition is met.
        // https://github.com/reduxjs/redux-thunk
        thunk,
    ],
});

// Infer the `RootState` and `AppDispatch` types from the store itself.
export type RootState = ReturnType<typeof store.getState>;

// Inferred type of: { state: State }
export type AppDispatch = typeof store.dispatch;
