import React from "react";
import { ModalProps as MuiModalProps } from "@mui/material";
import { DialogProps } from "@mui/material/Dialog";

import type { IconType } from "@components/Icon/Icon.types";

export interface ModalProps extends Omit<MuiModalProps, "className"> {
  open: boolean;
  onClose: () => void;
  action?: React.ReactNode;
  title?: string;
  mode?: "normal" | "fullScreen";
  className?: string | string[];
}

export interface SlideModalProps extends Omit<DialogProps, "className"> {
  open: boolean;
  onClose: () => void;
  action?: React.ReactNode;
  title?: string;
  className?: string | string[];
}

export type ConfirmModalProps = {
  heading?: string;
  icon?: IconType;
  description?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onConfirm: (data?: any) => Promise<unknown>;
  buttonLabel?: string;
  closeButtonLabel?: string;
};
