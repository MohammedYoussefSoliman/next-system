import type { IconType } from "@components/Icon/Icon.types";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
  width?: "full" | "min" | "max" | "fit" | "initial";
  onClick?: (event?: React.ChangeEvent<any>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  id?: string;
  type?: "reset" | "submit" | "button";
  icon?: IconType;
};
