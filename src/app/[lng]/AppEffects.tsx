"use client";
import React from "react";
import { useAppUtils } from "@/hooks";

export default function AppEffects() {
  const { initAppEffects } = useAppUtils();

  React.useEffect(() => {
    initAppEffects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
