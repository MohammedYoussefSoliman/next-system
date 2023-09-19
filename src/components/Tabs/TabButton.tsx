"use client";
import React from "react";
import colors from "tailwindcss/colors";
import { classNames } from "@/utils";
import i18next from "i18next";
import Typography from "@components/Typography";
import { useTranslation } from "@i18n/client";
import { TabsStore } from "./context";
import { TabButtonType } from "./Tabs.types";
import Icon from "../Icon";

export default function TabButton({ label, icon, value }: TabButtonType) {
  const { activeTab, namespace, updateActiveTab } = React.useContext(TabsStore);
  const lng = i18next.language;
  const active = activeTab === value;
  const { t } = useTranslation(lng, namespace);
  const classes = classNames(
    [
      "flex",
      "flex-1",
      "items-center",
      "justify-center",
      "outline-none",
      "border-none",
      "cursor-pointer",
      "rounded-[8px]",
      "text-gray-700",
      "enabled:hover:bg-slate-100",
      "gap-2",
      "h-full",
    ],
    [active && ["text-orange-400", "bg-amber-50", "enabled:hover:bg-amber-100"]]
  );
  const textClasses = classNames(
    ["font-medium", "mt-1.5"],
    [active && ["text-orange-500", "font-bold"]]
  );

  return (
    <button className={classes} onClick={() => updateActiveTab(value)}>
      {icon && (
        <Icon
          name={icon}
          color={active ? colors.orange[400] : colors.gray[700]}
        />
      )}
      <Typography className={textClasses} as="p2" text={label} />
    </button>
  );
}
