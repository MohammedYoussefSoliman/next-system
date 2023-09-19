import React from "react";
import { AxiosRequestConfig } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import generateInstance from "@/services/thunkInstance";
import { getResponseMessage, formDataHandler } from "@/utils";
import { showError, showSuccess } from "@appState/slices/ui-actions";
import { RootState } from "@appState/store";

type Args = {
  formData: { [key: string]: any };
  onSuccess?: (resData: any) => void;
  onEnd?: () => void;
  onFailure?: (message: React.ReactNode) => void;
  setLoading?: (value: boolean) => void;
  showSuccessMessage?: boolean;
};

type GetArgs = Omit<Args, "formData"> & {
  config?: AxiosRequestConfig;
};

interface Service {
  postService: AsyncThunk<any, Args, {}>;
  getService: AsyncThunk<any, GetArgs, {}>;
}

export default class ThunkService implements Service {
  constructor(endpoint: string) {
    this.postService = createAsyncThunk(
      endpoint,
      async (args: Args, { dispatch, getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const axiosInstance = generateInstance(state, dispatch);
        const {
          formData,
          onSuccess,
          setLoading,
          showSuccessMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          const readyFormData = formDataHandler(formData);
          if (setLoading) setLoading(true);
          const response = await axiosInstance.post(endpoint, readyFormData);
          if (showSuccessMessage)
            dispatch(showSuccess(getResponseMessage(response.data)));
          if (onSuccess) onSuccess(response.data);
          return response.data;
        } catch (err) {
          const messages = getResponseMessage(err as any, true);
          if (onFailure) {
            onFailure(messages);
          } else {
            dispatch(showError(messages));
          }
          return rejectWithValue(messages);
        } finally {
          if (setLoading) setLoading(false);
          if (onEnd) onEnd();
        }
      }
    );
    this.getService = createAsyncThunk(
      endpoint,
      async (args: GetArgs, { dispatch, getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const axiosInstance = generateInstance(state, dispatch);
        const {
          onSuccess,
          config,
          setLoading,
          showSuccessMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          if (setLoading) setLoading(true);
          const response = await axiosInstance.get(endpoint, { ...config });
          if (onSuccess) onSuccess(response.data);
          if (showSuccessMessage)
            dispatch(showSuccess(getResponseMessage(response.data)));
          return response.data;
        } catch (err) {
          const messages = getResponseMessage(err as any, true);
          if (onFailure) {
            onFailure(messages);
          } else {
            dispatch(showError(messages));
          }
          return rejectWithValue(err);
        } finally {
          if (setLoading) setLoading(false);
          if (onEnd) onEnd();
        }
      }
    );
  }

  postService;
  getService;
}
