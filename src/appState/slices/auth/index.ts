import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loginService from "./loginService";
import registerService from "./registerService";
import logoutService from "./logoutService";
import verifyOtpService from "./verifyOtpService";
import socialMediaLoginService from "./socialMediaLoginService";
import socialMediaRegisterService from "./socialMediaRegisterService";
import { AuthState } from "../appState.types";

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expirationDate: null,
  user: null,
  isVerified: false,
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

const authInitLogin = (state: AuthState, action: PayloadAction<any>) => {
  const { token, refresh_token, token_expired_at, ...user } =
    action.payload.data;
  return {
    ...state,
    isVerified: true,
    token,
    refreshToken: refresh_token,
    expirationDate: new Date(token_expired_at * 1000),
    user,
  };
};

const verifyState = (state: AuthState, action: PayloadAction<any>) => {
  console.log(action.payload);
  return {
    ...state,
    isVerified: true,
  };
};

const slice = createSlice({
  name: "app/authentication",
  initialState,
  reducers: {
    logout: () => initialState,
    setUserEmail: (state: AuthState, action: PayloadAction<string>) => {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    },
  },
  extraReducers: {
    [loginService.fulfilled.type]: authInitLogin,
    [loginService.rejected.type]: () => initialState,
    [logoutService.fulfilled.type]: () => initialState,
    [logoutService.rejected.type]: () => initialState,
    [registerService.fulfilled.type]: authInit,
    [registerService.rejected.type]: () => initialState,
    [socialMediaRegisterService.fulfilled.type]: authInit,
    [socialMediaRegisterService.rejected.type]: () => initialState,
    [socialMediaLoginService.fulfilled.type]: authInit,
    [socialMediaLoginService.rejected.type]: () => initialState,
    [verifyOtpService.fulfilled.type]: verifyState,
    [verifyOtpService.rejected.type]: (state) => state,
  },
});

export const { logout, setUserEmail } = slice.actions;
export default slice.reducer;
