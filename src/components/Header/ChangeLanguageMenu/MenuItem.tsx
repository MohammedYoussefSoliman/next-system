"use client";
import React from "react";
import colors from "tailwindcss/colors";
import { Button } from "@components/Button";
import Icon from "@components/Icon";
import { classNames } from "@/utils";
import { MenuItemProps } from "./ChangeLanguageMenu.types";

export default function MenuItem({ onClick, selected, label }: MenuItemProps) {
  const classes = classNames(
    [
      "w-32",
      "h-12",
      "bg-none",
      "enabled:hover:bg-slate-100",
      "rounded-none",
      "md:rounded-none",
      "xl:rounded-none",
      "px-2",
    ],
    selected && ["bg-none", "bg-amber-100", "enabled:hover:bg-amber-200"]
  );
  return (
    <Button onClick={onClick} className={classes} type="button" size="medium">
      <div className="flex gap-2 items-center justify-between h-full w-full">
        {label}
        {selected && <Icon name="check" size={20} color={colors.amber[500]} />}
      </div>
    </Button>
  );
}
