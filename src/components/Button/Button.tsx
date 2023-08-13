import React from "react";
import { ButtonProps } from "./button.types";
import tailwindConfig from "./button.config";

// TODO
/**
 * Add loading setup
 * Add icon setup
 */

export default function Button({
  label,
  icon,
  width,
  size,
  variant,
  onClick,
  isLoading,
  disabled,
  id,
  type,
}: ButtonProps) {
  const classes = React.useMemo(
    () =>
      tailwindConfig({
        variant,
        size,
        width,
      }),
    [variant, size, width]
  );
  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
    >
      {label}
    </button>
  );
}
