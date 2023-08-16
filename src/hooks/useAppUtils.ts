"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { changeLanguage } from "@/utils";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { setLanguage } from "@appState/slices/ui/slice";
import type { LangProps } from "@/common.types";

export default function useAppInit() {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.ui);
  const pathname = usePathname();
  const query = useSearchParams();
  const route = useRouter();
  let path = pathname;
  if (query.toString()) {
    path.concat(`?${query.toString()}`);
  }

  // confirms lang for both translations and routing and this function will have more effects in the future
  const initAppEffects = React.useCallback(() => {
    changeLanguage(language, path, (newPath) => {
      route.push(newPath);
    });
  }, [language, path, route]);

  // change lang for both translations and routing
  const updateLanguage = React.useCallback(
    (lng: LangProps) => {
      changeLanguage(lng, path, (newPath) => {
        dispatch(setLanguage(lng));
        route.push(newPath);
      });
    },
    [dispatch, path, route]
  );
  return {
    updateLanguage,
    initAppEffects,
  };
}
