import React from "react";
import { Modal as MuiModal } from "@mui/material";
import { classNames } from "@/utils";
import withMuiTheme from "@components/withMuiTheme";
import Paper from "@components/Paper";
import { Button } from "@components/Button";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import { ModalProps } from "./Modal.types";

function Modal({ open, onClose, mode, className, children }: ModalProps) {
  const classes = classNames(
    ["w-screen", "h-screen", "flex", "items-center", "justify-center", "p-2"],
    [mode === "fullScreen" && ["p-0"]]
  );
  const paperClasses = classNames(
    [
      "relative",
      "w-full",
      "md:w-2/3",
      "flex",
      "justify-center",
      "flex-col",
      "gap-4",
      "items-center",
    ],
    [
      mode === "fullScreen" && [
        "w-full",
        "md:w-full",
        "h-full",
        "rounded-none",
      ],
    ],
    className
  );

  return (
    <MuiModal open={open} onClose={onClose}>
      <div className={classes}>
        <Paper spacing={mode === "fullScreen" ? 0 : 2} className={paperClasses}>
          <div className="flex w-full flex-end">
            <button
              className="flex items-center justify-center"
              onClick={onClose}
            >
              <Icon name="times" />
            </button>
          </div>
          {children}
        </Paper>
      </div>
    </MuiModal>
  );
}

export default withMuiTheme<ModalProps>(Modal);
