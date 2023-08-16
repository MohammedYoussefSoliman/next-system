"use client";

import MuiCircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import colors from "tailwindcss/colors";

import type { SpinnerProps } from "./Spinner.types";

export default function Spinner(props: SpinnerProps) {
  const { bottomColor, topColor, size = 20, ...rest } = props;

  return (
    <div
      className={`m-1 md:m-2 w-[${size}px] h-[${size}px] relative flex items-center justify-center`}
    >
      <MuiCircularProgress
        variant="determinate"
        sx={{
          color: bottomColor || colors.rose[300],
          animationDuration: "900ms",
          position: "absolute",
          left: 0,
        }}
        size={size}
        thickness={5}
        value={100}
        {...rest}
      />
      <MuiCircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: topColor || colors.rose[500],
          animationDuration: "900ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={size}
        thickness={5}
        {...rest}
      />
    </div>
  );
}
