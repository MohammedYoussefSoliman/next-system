import type { LangProps, UserResponse } from "@/common.types";
import type { SnackbarProps } from "@components/Snackbar/Snackbar.types";

export type UIState = {
  mode: "dark" | "light";
  language: LangProps;
  nameSpace: string;
};

export type GlobalState = {
  message: any | null;
  type: "info" | "error" | "maintenance";
};

export type AuthState = {
  token: string | null;
  refreshToken: string | null;
  expirationDate: Date | null;
  user: Omit<
    UserResponse,
    "token" | "refresh_token" | "token_expired_at"
  > | null;
};

export type UIActionsState = {
  snackbar: SnackbarProps;
};
