import { configureStore } from "@reduxjs/toolkit";
import useCounter from "./counter/useCounter";
import useAuth from "./auth/useAuth";

const store = configureStore({ reducer: { useCounter, useAuth } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
