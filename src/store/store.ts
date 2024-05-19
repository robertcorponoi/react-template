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
});

// Infer the `RootState` and `AppDispatch` types from the store itself.
export type RootState = ReturnType<typeof store.getState>;

// Inferred type of: { state: State }
export type AppDispatch = typeof store.dispatch;
