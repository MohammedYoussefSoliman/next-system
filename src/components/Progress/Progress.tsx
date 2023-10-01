"use client";
import React from "react";
import { classNames } from "@/utils";
import { StyledProgress } from "./styles";

type ProgressProps = {
  // progress is a value between 0 and 1
  progress: number;
};

export default function Progress({ progress }: ProgressProps) {
  const classes = classNames([
    "transition-width",
    "duration-300",
    "ease-out",
    "bg-orange-400",
    "rounded-l-full",
    "md:rounded-full",
    "h-full",
  ]);

  return (
    <div className="fixed top-20 left-0 rounded-none md:static w-full bg-orange-100 h-2 md:rounded-full">
      <StyledProgress progress={`${progress * 100}`} className={classes} />
    </div>
  );
}
