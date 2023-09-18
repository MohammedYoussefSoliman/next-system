"use client";
import React from "react";
import { classNames } from "@/utils";
import { TabsStore } from "./context";
import { PanelType } from "./Tabs.types";

export default function TabPanel({ children, label, value }: PanelType) {
  const { activeTab, updateHeaders } = React.useContext(TabsStore);
  const classes = classNames(
    ["w-full", "min-w-[280px]"],
    [activeTab !== value && "hidden"]
  );

  React.useEffect(() => {
    updateHeaders({ label, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label, value]);

  return <div className={classes}>{children}</div>;
}
