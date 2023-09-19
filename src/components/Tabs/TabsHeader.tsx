import React from "react";
import { classNames } from "@/utils";
import { TabsStore } from "./context";
import TabButton from "./TabButton";

export default function TabsHeader() {
  const { tabs, headerClasses } = React.useContext(TabsStore);
  const classes = classNames(
    "p-1 rounded-xl flex items-center flex-warp border border-slate-200 h-12 w-full gap-2",
    headerClasses
  );

  if (tabs.length <= 0) return null;
  return (
    <div className={classes}>
      {tabs.map((tab) => (
        <TabButton
          key={`${tab.label}-${tab.value}`}
          value={tab.value}
          label={tab.label}
          icon={tab.icon}
        />
      ))}
    </div>
  );
}
