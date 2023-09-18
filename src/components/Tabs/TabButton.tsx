"use client";
import React from "react";
import colors from "tailwindcss/colors";
import { classNames } from "@/utils";
import i18next from "i18next";
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
      "items-center",
      "justify-center",
      "outline-none",
      "border-none",
      "cursor-pointer",
      "rounded-xl",
      "text-gray-700",
      "enabled:hover:bg-stone-200",
      "gap-2",
    ],
    [
      active && [
        "text-orange-500",
        "bg-amber-100",
        "enabled:hover:bg-amber-200",
      ],
    ]
  );
  return (
    <button className={classes} onClick={() => updateActiveTab(value)}>
      {icon && (
        <Icon
          name={icon}
          color={active ? colors.orange[500] : colors.gray[700]}
        />
      )}
      {t(label)}
    </button>
  );
}
