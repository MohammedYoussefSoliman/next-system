import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { logout } from "@appState/slices/auth";
import { store, RootState } from "@appState/store";
import { setGlobalError } from "@appState/slices/globals/slice";

export function getCurrentState(): RootState {
  return store.getState();
}
store.subscribe(getCurrentState);

const {
  auth: { token },
  ui: { language },
} = getCurrentState();

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  transformRequest: [
    (data, headers) => {
      if (token) {
        headers!.Authorization = token;
      }
      headers!["content-language"] = language;
      headers!["private-key"] = process.env.NEXT_PUBLIC_PRIVATE_KEY;
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
    // if (errorResponse.response?.status === 401) {
    //   store.dispatch(logout());
    //   window.location.replace("/login");
    // }
    if (errorResponse.response?.status === 500) {
      store.dispatch(
        setGlobalError({ message: "unknownError", type: "error" })
      );
      window.location.replace("/error");
    }
    if (errorResponse.response?.status === 503) {
      store.dispatch(
        setGlobalError({ message: "maintenanceInfo", type: "info" })
      );
    }
    return Promise.reject(errorResponse);
  }
);

export default instance;
