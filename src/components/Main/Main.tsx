import React from "react";
import { classNames } from "@/utils";

type MainProps = {
  children: React.ReactNode;
  className?: string | string[];
};

export default function Main({ children, className }: MainProps) {
  const classes = classNames(
    ["flex", "flex-col", "items-center", "flex-1", "mt-16", "w-full"],
    className
  );

  return <main className={classes}>{children}</main>;
}
