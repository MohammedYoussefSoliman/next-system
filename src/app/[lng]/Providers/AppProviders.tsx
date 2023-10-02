"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store, persister } from "@/appState/store";
import type { PageProps } from "@/common.types";
import MuiCacheRtl from "./MuiCacheRtl";

const queryClient = new QueryClient();

export default function AppProviders({ children }: Omit<PageProps, "params">) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <QueryClientProvider client={queryClient}>
          <MuiCacheRtl>{children}</MuiCacheRtl>
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
