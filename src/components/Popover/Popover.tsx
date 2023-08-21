import React from "react";
import colors from "tailwindcss/colors";
import { Popover as MuiPopover } from "@mui/material";
import withMuiTheme from "@components/withMuiTheme";

interface Props {
  children: React.ReactNode;
  target: any;
  onClose: () => void;
}

function Popover({ children, target, onClose }: Props) {
  const open = Boolean(target);
  return (
    <MuiPopover
      open={open}
      sx={{
        [".MuiPaper-root"]: {
          borderRadius: "14px",
          //   minWidth: 250,
          boxShadow: "0px 4px 6px -2px #10182808",
          border: `1px solid ${colors.gray[200]}`,
        },
      }}
      anchorEl={target}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: -10,
        horizontal: "center",
      }}
      onClose={onClose}
    >
      {children}
    </MuiPopover>
  );
}

export default withMuiTheme(Popover);
