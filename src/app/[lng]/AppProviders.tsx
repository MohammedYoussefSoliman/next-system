import React from "react";

import type { PageProps } from "./common.types";

export default function AppProviders({ children }: Omit<PageProps, "params">) {
  return <>{children}</>;
}
