import React from "react";
import { ModalProps as MuiModalProps } from "@mui/material";
import type { IconType } from "@components/Icon/Icon.types";

export interface ModalProps extends MuiModalProps {
  open: boolean;
  onClose: () => void;
  action?: React.ReactNode;
  title?: string;
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
