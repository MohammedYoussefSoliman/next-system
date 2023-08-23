import React from "react";
import { Drawer as MuiDrawer } from "@mui/material";
import withMuiTheme from "@components/withMuiTheme";

type Props = {
  open: boolean;
  onClose: () => void;
  anchor?: "top" | "left" | "bottom" | "right";
  children: React.ReactNode;
  fullWidth?: boolean;
};

function Drawer({ open, onClose, children, anchor = "top", fullWidth }: Props) {
  return (
    <MuiDrawer
      sx={{
        [".MuiPaper-root"]: {
          borderRadius: "0 !important",
          width: fullWidth ? "100%" : "fit-content",
        },
      }}
      anchor={anchor}
      open={open}
      onClose={onClose}
    >
      <div className="w-full">{children}</div>
    </MuiDrawer>
  );
}

export default withMuiTheme(Drawer);
