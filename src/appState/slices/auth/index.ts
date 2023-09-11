import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loginService from "./loginService";
import registerService from "./registerService";
import logoutService from "./logoutService";
import profileService from "./profileService";
import { AuthState } from "../appState.types";

const { getService: getUserProfile, postService: updateUserProfile } =
  profileService;

const initialState: AuthState = {
  token: null,
  refreshToken: null,
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
  const { token, refresh_token, ...user } = action.payload.data;
  return {
    ...state,
    token,
    refreshToken: refresh_token,
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
    [getUserProfile.fulfilled.type]: updateUserState,
    [getUserProfile.rejected.type]: (state: AuthState) => state,
    [updateUserProfile.fulfilled.type]: updateUserState,
    [updateUserProfile.rejected.type]: (state: AuthState) => state,
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
