import React from "react";
import { classNames } from "@/utils";
import type { DividerProps } from "./Deivider.types";

const resolveDivider = (
  type: DividerProps["type"],
  level: DividerProps["level"] = 1,
  color: DividerProps["color"]
) => {
  const commonStyles = [
    type === "horizontal" ? "w-full" : "h-full",
    `${color ? `bg-[${color}]` : "bg-gray-300"}`,
  ];
  const styles = {
    horizontal: {
      1: "h-px",
      2: "h-0.5",
      3: "h-[3px]",
      4: "h-1",
    },
    vertical: {
      1: "w-px",
      2: "w-0.5",
      3: "w-[3px]",
      4: "w-1",
    },
  };

  return [...commonStyles, styles[type][level]];
};

export default function Divider({
  type,
  level,
  color,
  className,
}: DividerProps) {
  const classes = classNames(resolveDivider(type, level, color), className);
  return <div className={classes} />;
}
