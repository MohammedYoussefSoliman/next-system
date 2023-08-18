import type { IconType } from "@components/Icon/Icon.types";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large" | "xLarge";
  width?: "full" | "min" | "max" | "fit" | "initial";
  onClick?: (event?: React.ChangeEvent<any>) => void;
  loading?: boolean | string;
  disabled?: boolean;
  id?: string;
  type?: "reset" | "submit" | "button";
  icon?: IconType;
  namespace?: string;
};
