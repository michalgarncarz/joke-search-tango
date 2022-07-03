import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const selectedJokeSlice = createSlice({
  name: "selectedJoke",
  initialState,
  reducers: {
    setSelectedJoke: (state, { payload }: PayloadAction<string>) => {
      return payload;
    },
  },
});

export const { setSelectedJoke } = selectedJokeSlice.actions;

export const selectedJokeReducer = selectedJokeSlice.reducer;
