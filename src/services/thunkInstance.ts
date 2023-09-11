/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { logout } from "state/auth/slice";
import { RootState } from "@appState/store";
import { setGlobalError } from "@appState/slices/globals/slice";

function generateInstance(
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): AxiosInstance {
  const {
    auth: { token },
    ui: { language },
  } = state;

  const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_baseUrl,
    transformRequest: [
      (data, headers) => {
        if (token) {
          headers!.Authorization = token.value;
        }
        headers!["content-language"] = language;
        headers!["content-type"] = "application/json";
        return data;
      },
    ],
  });
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (errorResponse: AxiosError) => {
      if (errorResponse.response?.status === 401) {
        dispatch(logout());
        window.location.replace("/login");
      }
      if (errorResponse.response?.status === 500) {
        dispatch(setGlobalError({ message: "unknownError", type: "error" }));
        window.location.replace("/error");
      }
      if (errorResponse.response?.status === 503) {
        dispatch(setGlobalError({ message: "maintenanceInfo", type: "info" }));
      }
      return Promise.reject(errorResponse);
    }
  );
  return instance;
}

export default generateInstance;
