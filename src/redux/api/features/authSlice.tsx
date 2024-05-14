import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

interface AuthState {
  user: any;
  token: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

const cratePersist = {
  key: "auth",
  storage,
};

export const authPersistReducers = persistReducer(
  cratePersist,
  authSlice.reducer
);

export const { setUser, logOut } = authSlice.actions;
