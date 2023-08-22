import React from "react";
import { classNames } from "@/utils";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
  withShadow?: boolean;
};

export default function Paper({
  children,
  spacing,
  withShadow,
  className,
}: Props) {
  const classes = classNames(
    ["bg-white", "rounded-2xl", "md:rounded-3xl", "p-4", "md:p-6"],
    withShadow && ["shadow-2xl", "shadow-indigo-700/40"],
    spacing && `p-${spacing}`,
    className
  );

  return <div className={classes}>{children}</div>;
}
