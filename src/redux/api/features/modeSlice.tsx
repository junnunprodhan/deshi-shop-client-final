import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

interface TInitial {
  mode: boolean;
}

// Define the initial state using that type
const initialState: TInitial = {
  mode: false,
};

export const toggleSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

const toggleMode = {
  key: "mode",
  storage,
};

export const modePersistReducers = persistReducer(
  toggleMode,
  toggleSlice.reducer
);

export const { setMode } = toggleSlice.actions;
