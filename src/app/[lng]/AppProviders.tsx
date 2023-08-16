"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@appState/store";
import type { PageProps } from "./common.types";

export default function AppProviders({ children }: Omit<PageProps, "params">) {
  return <Provider store={store}>{children}</Provider>;
}
