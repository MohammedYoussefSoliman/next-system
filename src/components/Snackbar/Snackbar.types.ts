import { SnackbarOrigin } from "@mui/material";
import { GrowProps } from "@mui/material/Grow";
import { FadeProps } from "@mui/material/Fade";
import { SlideProps } from "@mui/material/Slide";

type SlideTransition = {
  type: "slide";
  props?: SlideProps;
};
type GrowTransition = {
  type: "grow";
  props?: GrowProps;
};
type FadeTransition = {
  type: "fade";
  props?: FadeProps;
};

export type SnackbarProps = {
  title?: string;
  message: string | null;
  transition?: SlideTransition | GrowTransition | FadeTransition;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  status?: "success" | "failure" | "info";
  onClose?: () => void;
  unsubscribe?: () => void;
  closeOnClickAnyway?: boolean;
};
