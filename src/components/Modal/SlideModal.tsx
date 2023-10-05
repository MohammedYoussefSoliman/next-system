import React from "react";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { classNames } from "@/utils";
import Paper from "@components/Paper";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import { SlideModalProps } from "./Modal.types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideModal({
  open,
  onClose,
  className,
  title,
  children,
}: Omit<SlideModalProps, "mode">) {
  const classes = classNames([
    "w-full",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    "p-0",
    "md:p-2",
    "relative",
  ]);

  const paperClasses = classNames(
    [
      "md:relative",
      "absolute",
      "w-full",
      "md:w-[1000px]",
      "flex",
      "flex-col",
      "gap-4",
      "bottom-0",
      "rounded-b-none",
    ],
    className
  );

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{
        ".MuiDialog-container": {
          width: "100vw",
          height: "100vh",
          boxShadow: "none",
        },
        ".MuiPaper-root": {
          all: "unset",
          background: "transparent",
          width: "100%",
          height: "100%",
          boxShadow: "none",
          maxHeight: "unset",
          maxWidth: "unset",
          margin: 0,
        },
      }}
      onClose={onClose}
    >
      <div className={classes}>
        <Paper className={paperClasses}>
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
    </Dialog>
  );
}
