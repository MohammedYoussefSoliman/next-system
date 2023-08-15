import React from "react";

import type { AppProps } from "@/app/common.types";

export default function AppProviders({ children }: AppProps) {
  return <div>{children}</div>;
}
