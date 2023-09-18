import React from "react";
import { IconType } from "@/components/Icon/Icon.types";

export type TabsType = {
  defaultValue?: number | string;
  children: React.ReactNode;
  namespace?: string;
};
export type TabType = {
  label: string;
  value: number | string;
};

export type TabButtonType = {
  icon?: IconType;
  value: number | string;
  label: string;
};

export type PanelType = {
  label: string;
  value: string;
  children: React.ReactNode;
};
