import { configureStore } from "@reduxjs/toolkit";
import useCounter from "./counter/useCounter";

const store = configureStore({ reducer: { useCounter } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
