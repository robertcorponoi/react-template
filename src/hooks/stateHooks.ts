import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

// Saves us having to type `(state: RootState)` every time.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// For `useDispatch`, it saves us from having to remember to use `AppDispatch` for thunks.
export const useAppDispatch = () => useDispatch<AppDispatch>();
