import CSS from "csstype";
import { CircularProgressProps } from "@mui/material/CircularProgress";

export interface SpinnerProps extends CircularProgressProps {
  bottomColor?: CSS.Property.Color;
  topColor?: CSS.Property.Color;
}
