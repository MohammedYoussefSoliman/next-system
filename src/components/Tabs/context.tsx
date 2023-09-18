import React from "react";
import { TabType, TabsType } from "./Tabs.types";

interface AppContextInterface {
  updateHeaders: (tab: TabType) => void;
  tabs: TabType[];
  updateActiveTab: (value: number | string) => void;
  activeTab: number | string;
  namespace?: string;
}

export const TabsStore = React.createContext<AppContextInterface>({
  tabs: [],
  updateHeaders: () => {},
  updateActiveTab: () => {},
  activeTab: "",
  namespace: "",
});

export default function Tabs({ children, defaultValue, namespace }: TabsType) {
  const [tabs, setTabs] = React.useState<TabType[]>([]);
  const [activeTab, setActiveTab] = React.useState<number | string>(
    defaultValue || ""
  );

  const updateHeaders = (tab: TabType) => {
    setTabs((currentTabs) => {
      const foundTab = currentTabs.find((t) => t.label === tab.label);
      if (foundTab) return currentTabs;
      return [...currentTabs, tab];
    });
  };

  const updateActiveTab = (value: number | string) => {
    setActiveTab(value);
  };

  const contextValues = React.useMemo(
    () => ({
      tabs,
      updateHeaders,
      updateActiveTab,
      activeTab,
      namespace,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTab, tabs, setTabs]
  );

  return (
    <TabsStore.Provider value={contextValues}>{children}</TabsStore.Provider>
  );
}
