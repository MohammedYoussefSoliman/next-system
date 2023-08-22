import React from "react";
import { classNames } from "@/utils";

type Props = {
  children: React.ReactNode;
};

export default function Grid({ children }: Props) {
  const classes = classNames(["grid", "grid-flow-col"]);
  return <div className={classes}>{children}</div>;
}
