import React from "react";
import trimEnd from "lodash/trimEnd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/hooks";
import Typography from "@components/Typography";
import type { NavLinkProps } from "./NavLink.types";
import { classNames } from "@/utils";

const prepareTo = (to: string) => {
  if (to === "/" || to === "") {
    return "";
  }
  return trimEnd(to, "/");
};

export default function NavLink({
  to,
  label,
  type = "normal",
  onClick,
}: NavLinkProps) {
  const wrapperClasses = classNames(
    ["flex", "relative"],
    type === "normal" && [
      "h-full",
      "flex-col",
      "items-center",
      "justify-center",
    ],
    type === "aside" && ["w-full", "h-12", "items-center"]
  );
  const underlineClasses = classNames(
    ["bg-rose-500", "absolute"],
    type === "normal" && [
      "h-1.5",
      "self-end",
      "w-full",
      "rounded-t-lg",
      "bottom-0",
    ],
    type === "aside" && [
      "w-1.5",
      "h-full",
      "self-end",
      "rounded-l-lg",
      "right-0",
    ]
  );
  const pathname = usePathname();
  const { language } = useAppSelector((state) => state.ui);
  const preparedTo = React.useMemo(() => prepareTo(to), [to]);
  const active = pathname === `/${language}${preparedTo}`;
  return (
    <li className={wrapperClasses}>
      <Link href={`/${language}/${to}`} onClick={onClick}>
        <Typography
          text={label}
          color={active ? "secondary" : "light"}
          hoverStyles={
            !active ? ["hover:text-rose-600", "hover:underline"] : undefined
          }
          className={type === "aside" ? "mr-8 text-lg" : ""}
          capitalizeFirstLetter
        />
      </Link>
      {active && <div className={underlineClasses} />}
    </li>
  );
}
