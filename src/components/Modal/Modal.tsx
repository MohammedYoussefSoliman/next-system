import React from "react";
import { Modal as MuiModal } from "@mui/material";
import Typography from "@components/Typography";
import { classNames } from "@/utils";
import withMuiTheme from "@components/withMuiTheme";
import Paper from "@components/Paper";
import Icon from "@components/Icon";
import { ModalProps } from "./Modal.types";

function Modal({
  open,
  onClose,
  mode = "normal",
  className,
  title,
  children,
}: ModalProps) {
  const classes = classNames(
    [
      "w-screen",
      "h-screen",
      "flex",
      "items-center",
      "justify-center",
      "p-2",
      "relative",
    ],
    [mode === "fullScreen" && ["p-0"]]
  );
  const paperClasses = classNames(
    ["relative", "w-full", "md:w-2/3", "flex", "flex-col", "gap-4"],
    [
      mode === "fullScreen" && [
        "w-full",
        "md:w-full",
        "h-full",
        "rounded-none",
        "md:rounded-none",
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
              className="flex items-center justify-center w-6 h-6 enabled:hover:bg-slate-50 rounded-md"
              onClick={onClose}
            >
              <Icon name="times" />
            </button>
            {title && (
              <div className="flex flex-1 items-center justify-center">
                <Typography as="h5" text={title} />
              </div>
            )}
          </div>
          <div className="flex-1">{children}</div>
        </Paper>
      </div>
    </MuiModal>
  );
}

export default withMuiTheme<ModalProps>(Modal);
