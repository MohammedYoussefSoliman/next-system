"use client";

import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persister } from "@/appState/store";
import type { PageProps } from "@/common.types";

export default function PersistStoreProvider({
  children,
}: Omit<PageProps, "params">) {
  return (
    <PersistGate loading={null} persistor={persister}>
      {children}
    </PersistGate>
  );
}
