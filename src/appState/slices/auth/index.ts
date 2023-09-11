import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loginService from "./loginService";
import registerService from "./registerService";
import logoutService from "./logoutService";
import { AuthState } from "../appState.types";

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expirationDate: null,
  user: null,
};

const authInit = (state: AuthState, action: PayloadAction<any>) => {
  const { token, refresh_token, token_expired_at, ...user } =
    action.payload.data;
  return {
    ...state,
    token,
    refreshToken: refresh_token,
    expirationDate: new Date(token_expired_at * 1000),
    user,
  };
};

const updateUserState = (state: AuthState, action: PayloadAction<any>) => {
  const { token, refresh_token, token_expired_at, ...user } =
    action.payload.data;
  return {
    ...state,
    token,
    refreshToken: refresh_token,
    expirationDate: new Date(token_expired_at * 1000),
    user,
  };
};

const slice = createSlice({
  name: "app/authentication",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: {
    [loginService.fulfilled.type]: authInit,
    [loginService.rejected.type]: () => initialState,
    [logoutService.fulfilled.type]: () => initialState,
    [logoutService.rejected.type]: () => initialState,
    [registerService.fulfilled.type]: authInit,
    [registerService.rejected.type]: () => initialState,
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
