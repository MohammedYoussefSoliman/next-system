import React from "react";
import NextLink from "next/link";
import { useAppSelector } from "@/hooks";
import Typography from "@components/Typography";
import type { NavLinkProps } from "./Link.types";

export default function Link({
  to,
  label,
  onClick,
  ...textProps
}: NavLinkProps) {
  const { language } = useAppSelector((state) => state.ui);
  return (
    <NextLink href={`/${language}/${to}`} onClick={onClick}>
      <Typography
        text={label}
        color="secondary"
        hoverStyles={["hover:text-rose-600", "hover:underline"]}
        {...textProps}
      />
    </NextLink>
  );
}
