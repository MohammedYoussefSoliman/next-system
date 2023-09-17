/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { setGlobalError } from "@appState/slices/globals/slice";

import { useAppDispatch, useAppSelector } from "./reduxHooks";
import useAuth from "./useAuth";
import useNavigation from "./useNavigation";

export default function useAxiosInstance() {
  const {
    auth: { token },
    ui: { language },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const { logout } = useAuth();

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
      if (response.data.data) response.data = response.data.data;
      return response;
    },
    (errorResponse: AxiosError) => {
      // if (errorResponse.response?.status === 401) {
      //   logout();
      //   navigate("/login");
      // }
      if (errorResponse.response?.status === 500) {
        dispatch(setGlobalError({ message: "unknownError", type: "error" }));
        navigate("/error");
      }
      if (errorResponse.response?.status === 503) {
        dispatch(setGlobalError({ message: "maintenanceInfo", type: "info" }));
        navigate("/maintenance");
      }
      return Promise.reject(errorResponse);
    }
  );

  return instance;
}
