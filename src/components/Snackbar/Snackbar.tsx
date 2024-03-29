import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide, { SlideProps } from "@mui/material/Slide";
import Grow, { GrowProps } from "@mui/material/Grow";
import Typography from "@components/Typography";
import Icon from "@components/Icon";
import { IconButton } from "@components/Button";
import { dismissMessage } from "@appState/slices/ui-actions";
import { useAppDispatch } from "@hooks/index";
import { SnackbarProps } from "./Snackbar.types";
import { classNames } from "@/utils";
import withMuiTheme from "@components/withMuiTheme";

import tailwindConfig from "./Snackbar.config";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

function Snackbar({
  onClose,
  message,
  unsubscribe,
  status,
  title,
  transition = {
    type: "slide",
  },
  anchorOrigin,
  autoHideDuration,
  closeOnClickAnyway = true,
}: SnackbarProps) {
  let TransitionComponent;

  switch (transition.type) {
    case "slide":
      TransitionComponent = SlideTransition;
      break;
    case "grow":
      TransitionComponent = GrowTransition;
      break;
    case "fade":
    default:
      TransitionComponent = Fade;
  }

  const [open, setOpen] = React.useState<boolean>(Boolean(message) || false);
  const dispatch = useAppDispatch();
  const baseClasses = React.useMemo(() => tailwindConfig({ status }), [status]);

  const classes = classNames(baseClasses, "w-full");

  React.useEffect(() => {
    if (message) setOpen(Boolean(message));
    return () => {
      if (unsubscribe) unsubscribe();
      setOpen(false);
    };
  }, [message, unsubscribe, dispatch]);

  const handleClose = () => {
    setOpen(false);
    dispatch(dismissMessage());
    if (onClose) onClose();
    if (unsubscribe) unsubscribe();
  };

  return (
    <MuiSnackbar
      sx={{
        width: "100%",
        top: "0 !important",
      }}
      anchorOrigin={
        anchorOrigin || {
          vertical: "top",
          horizontal: "center",
        }
      }
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={(_, reason) => {
        if (!closeOnClickAnyway) {
          if (reason !== "clickaway") handleClose();
        } else {
          handleClose();
        }
      }}
      TransitionComponent={TransitionComponent}
    >
      <div className={classes}>
        <div className="w-15 h-15">
          <Icon
            name={
              status === "failure"
                ? `times-badge`
                : status === "success"
                ? "check-badge"
                : "info-badge"
            }
            size={60}
          />
        </div>
        <div className="flex flex-col">
          {title && (
            <Typography
              as="h6"
              text={title}
              className={status !== "info" ? "text-white" : undefined}
            />
          )}
          {message && (
            <div className="flex-1">
              {typeof message === "string" ? (
                <Typography
                  as="p1"
                  text={message}
                  className={status !== "info" ? "text-white" : undefined}
                />
              ) : (
                message
              )}
            </div>
          )}
        </div>
        <IconButton
          onClick={handleClose}
          icon="times"
          variant="secondary"
          size="medium"
          className="ms-auto"
        />
      </div>
    </MuiSnackbar>
  );
}

export default withMuiTheme(Snackbar);
