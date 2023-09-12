import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { logout } from "@appState/slices/auth";
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
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    transformRequest: [
      (data, headers) => {
        if (token) {
          headers!.Authorization = token;
        }
        headers!["content-language"] = language;
        headers!["content-type"] = "application/json";
        headers!["private-key"] = process.env.NEXT_PUBLIC_PRIVATE_KEY;
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
