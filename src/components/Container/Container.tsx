import React from "react";
import { classNames } from "@/utils";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  className?: string | string[];
};

export default function Container({ children, spacing, className }: Props) {
  const classes = classNames(
    ["container", "mx-auto", `${spacing ? `px-${spacing}` : ""}`],
    className
  );
  return <div className={classes}>{children}</div>;
}
