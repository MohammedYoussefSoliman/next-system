"use client";
import React from "react";
import { classNames } from "@/utils";
import { TabsStore } from "./context";
import { PanelType } from "./Tabs.types";

export default function TabPanel({ children, label, value, icon }: PanelType) {
  const { activeTab, updateHeaders } = React.useContext(TabsStore);
  const classes = classNames(
    ["w-full", "min-w-[280px]"],
    [activeTab !== value && "hidden"]
  );
  React.useEffect(() => {
    updateHeaders({ label, value, icon });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label, value, icon]);

  return <div className={classes}>{children}</div>;
}
