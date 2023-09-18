import React from "react";
import { TabsStore } from "./context";
import TabButton from "./TabButton";

export default function TabsHeader() {
  const { tabs } = React.useContext(TabsStore);

  if (tabs.length <= 0) return null;
  return (
    <div className="ms-auto p-0.5 rounded-xl flex items-center flex-warp border-slate-200">
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
