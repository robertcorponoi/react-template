import type { RootState } from "../store";

/**
 * Returns the name of the user.
 * 
 * @param {RootState} state The root state.
 * 
 * @returns {string}
 */
export const selectUserName = (state: RootState): string => state.user.name;
