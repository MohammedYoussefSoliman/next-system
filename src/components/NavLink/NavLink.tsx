import React from "react";
import trimEnd from "lodash/trimEnd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/hooks";
import Typography from "@components/Typography";
import type { NavLinkProps } from "./NavLink.types";

const prepareTo = (to: string) => {
  if (to === "/" || to === "") {
    return "";
  }
  return trimEnd(to, "/");
};

export default function NavLink({ to, label }: NavLinkProps) {
  const pathname = usePathname();
  const { language } = useAppSelector((state) => state.ui);
  const preparedTo = React.useMemo(() => prepareTo(to), [to]);
  const active = pathname === `/${language}${preparedTo}`;
  return (
    <li className="h-full flex flex-col items-center justify-center relative">
      <Link href={`/${language}/${to}`}>
        <Typography
          text={label}
          color={active ? "secondary" : "light"}
          hoverStyles={
            !active ? ["hover:text-rose-600", "hover:underline"] : undefined
          }
          capitalizeFirstLetter
        />
      </Link>
      {active && (
        <div className="h-1.5 self-end w-full bg-rose-700 rounded-t-lg absolute bottom-0" />
      )}
    </li>
  );
}
