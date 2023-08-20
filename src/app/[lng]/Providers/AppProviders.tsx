"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persister } from "@/appState/store";
import type { PageProps } from "@/common.types";
import MuiCacheRtl from "./MuiCacheRtl";

export default function AppProviders({ children }: Omit<PageProps, "params">) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <MuiCacheRtl>{children}</MuiCacheRtl>
      </PersistGate>
    </Provider>
  );
}
