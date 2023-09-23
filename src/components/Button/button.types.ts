import type { IconType } from "@components/Icon/Icon.types";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  size?: "small" | "medium" | "large" | "xLarge";
  width?: "full" | "min" | "max" | "fit" | "initial";
  onClick?: (event?: React.ChangeEvent<any>) => void;
  loading?: boolean | string;
  disabled?: boolean;
  id?: string;
  type?: "reset" | "submit" | "button";
  icon?: IconType;
  iconReverse?: IconType;
  namespace?: string;
  className?: string;
};

export type LinkButtonProps = Omit<
  ButtonProps,
  "onClick" | "disabled" | "type" | "loading"
> & {
  to: string;
};

export type IconButtonProps = {
  icon: IconType;
  iconColor?: "inherit" | string;
} & Omit<ButtonProps, "children">;
