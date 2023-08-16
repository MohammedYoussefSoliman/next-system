import React from "react";

import { NavLink } from "./ExternalLink.types";

export default function NavLink({ children, href }: NavLink) {
  return (
    <a className="text-white text-normal" href={href}>
      {children}
    </a>
  );
}
