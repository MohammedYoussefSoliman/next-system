import React from "react";
import { Modal as MuiModal } from "@mui/material";
import { classNames } from "@/utils";
import withMuiTheme from "@components/withMuiTheme";
import Paper from "@components/Paper";
import { Button } from "@components/Button";
import Icon from "@components/Icon";
import Typography from "@components/Typography";
import { ConfirmModalProps } from "./Modal.types";

function ConfirmModal({
  open,
  icon,
  onClose,
  heading,
  description,
  onConfirm,
  buttonLabel,
  closeButtonLabel,
}: ConfirmModalProps) {
  const classes = classNames([
    "w-screen",
    "h-screen",
    "flex",
    "items-center",
    "justify-center",
    "p-2",
  ]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const call = React.useCallback(async () => {
    setLoading(true);
    onConfirm()
      .then(() => {
        setLoading(false);
      })
      .then(() => {
        setTimeout(() => onClose(), 0);
      });
  }, [onConfirm, onClose]);

  return (
    <MuiModal open={open} onClose={onClose}>
      <div className={classes}>
        <Paper
          spacing={2}
          className="relative w-full md:w-[420px] flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex w-full flex-end">
            <button
              className="flex items-center justify-center"
              onClick={onClose}
            >
              <Icon name="times" />
            </button>
          </div>
          <Icon name={icon || "info-badge"} size={100} />
          {heading && (
            <Typography as="h3" text={heading} className="text-center" />
          )}
          {description && typeof description === "string" && (
            <Typography as="h3" text={description} />
          )}
          {description && typeof description !== "string" && description}
          <div className="flex justify-between w-full gap-2">
            <Button onClick={call} loading={loading} className="flex-1">
              {buttonLabel || "confirm"}
            </Button>
            <Button onClick={onClose} variant="transparent" className="flex-1">
              {closeButtonLabel || "cancel"}
            </Button>
          </div>
        </Paper>
      </div>
    </MuiModal>
  );
}

export default withMuiTheme<ConfirmModalProps>(ConfirmModal);
