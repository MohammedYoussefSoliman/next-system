import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import type { SnackbarProps } from "@components/Snackbar/Snackbar.types";
import { UIActionsState } from "../appState.types";

const initialState: UIActionsState = {
  snackbar: {
    message: null,
    autoHideDuration: 7000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    transition: {
      type: "slide",
    },
    status: "info",
  },
};

const messageReducer = (state: any, action: PayloadAction<SnackbarProps>) => {
  return {
    ...state,
    snackbar: {
      ...state.snackbar,
      ...action.payload,
    },
  };
};

const slice = createSlice({
  name: "app/ui-actions",
  initialState,
  reducers: {
    showMessage: {
      reducer: messageReducer,
      prepare: (
        message: React.ReactNode,
        options?: Omit<SnackbarProps, "message">
      ) => {
        const payload: SnackbarProps = {
          ...initialState.snackbar,
          message,
          ...options,
        };
        return { payload };
      },
    },
    showError: {
      reducer: messageReducer,
      prepare: (
        message: React.ReactNode,
        options?: Omit<SnackbarProps, "message">
      ) => {
        return {
          payload: {
            ...initialState.snackbar,
            ...options,
            message,
            status: "failure" as "success" | "failure" | "info",
          },
        };
      },
    },
    showSuccess: {
      reducer: messageReducer,
      prepare: (
        message: React.ReactNode,
        options?: Omit<SnackbarProps, "message">
      ) => {
        return {
          payload: {
            ...initialState.snackbar,
            ...options,
            message,
            status: "success" as "success" | "failure" | "info",
          },
        };
      },
    },
    dismissMessage(state) {
      return { ...state, snackbar: initialState.snackbar };
    },
  },
});

export const { showMessage, showError, showSuccess, dismissMessage } =
  slice.actions;
export default slice.reducer;
