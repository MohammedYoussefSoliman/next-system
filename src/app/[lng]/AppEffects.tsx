"use client";
import React from "react";
import { useAppUtils, useAppSelector, useAppDispatch } from "@/hooks";
import { categoriesService } from "@/appState/slices/categories";
import Snackbar from "@/components/Snackbar";

export default function AppEffects() {
  const { initAppEffects } = useAppUtils();
  const dispatch = useAppDispatch();
  const { snackbar } = useAppSelector((state) => state.uiAction);

  React.useEffect(() => {
    initAppEffects();

    dispatch(categoriesService({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{snackbar.message && <Snackbar {...snackbar} />}</>;
}
