import React from "react";
import { IconType } from "@/components/Icon/Icon.types";

export type TabsType = {
  defaultValue?: number | string;
  children: React.ReactNode;
  namespace?: string;
  headerClasses?: string | string[];
};
export type TabType = {
  label: string;
  icon?: IconType;
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
  icon?: IconType;
  children: React.ReactNode;
};
