import React from "react";
import { classNames } from "@/utils";
import { NavLink } from "./ExternalLink.types";

export default function NavLink({
  children,
  href,
  target,
  className,
}: NavLink) {
  const classes = classNames(["text-white", "text-normal"], className);
  return (
    <a target={target} className={classes} href={href}>
      {children}
    </a>
  );
}
