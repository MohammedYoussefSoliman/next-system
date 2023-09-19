import React from "react";
import Provider from "./context";
import TabsHeader from "./TabsHeader";
import { TabsType } from "./Tabs.types";

export default function Tabs({
  defaultValue,
  children,
  headerClasses,
}: TabsType) {
  return (
    <Provider defaultValue={defaultValue} headerClasses={headerClasses}>
      <div className="flex flex-col gap-4 w-full">
        <TabsHeader />
        {children}
      </div>
    </Provider>
  );
}
