"use client";
import React from "react";
import { useAppUtils, useAppSelector } from "@/hooks";
import Snackbar from "@/components/Snackbar";

export default function AppEffects() {
  const { initAppEffects } = useAppUtils();
  const { snackbar } = useAppSelector((state) => state.uiAction);

  React.useEffect(() => {
    initAppEffects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{snackbar.message && <Snackbar {...snackbar} />}</>;
}
