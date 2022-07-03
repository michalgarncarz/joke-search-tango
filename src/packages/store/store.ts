import { configureStore } from "@reduxjs/toolkit";
import { jokesApi } from "../services";
import { selectedJokeReducer } from "./slices";

export const store = configureStore({
  reducer: {
    selectedJoke: selectedJokeReducer,
    [jokesApi.reducerPath]: jokesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
