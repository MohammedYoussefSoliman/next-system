import React from "react";
import { AxiosRequestConfig } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import generateInstance from "@/services/thunkInstance";
import { getErrorMessage } from "@/utils";
import { showError, showSuccess } from "@appState/slices/ui-actions";
import { RootState } from "@appState/store";

type Args = {
  formData: FormData;
  onSuccess?: () => void;
  onEnd?: () => void;
  onFailure?: (message: React.ReactNode) => void;
  setLoading?: (value: boolean) => void;
  successMessage?: string;
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
          successMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          if (setLoading) setLoading(true);
          const response = await axiosInstance.post(endpoint, formData);
          if (onSuccess) onSuccess();
          if (successMessage) dispatch(showSuccess(successMessage));
          return response.data;
        } catch (err) {
          const messages = getErrorMessage(err as any);
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
          successMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          if (setLoading) setLoading(true);
          const response = await axiosInstance.get(endpoint, { ...config });
          if (onSuccess) onSuccess();
          if (successMessage) dispatch(showSuccess(successMessage));
          return response.data;
        } catch (err) {
          const messages = getErrorMessage(err as any);
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
  }

  postService;
  getService;
}
