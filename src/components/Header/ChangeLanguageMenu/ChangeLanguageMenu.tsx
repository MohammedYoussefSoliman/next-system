"use client";
import React from "react";
import { Button } from "@components/Button";
import Icon from "@components/Icon";
import Divider from "@components/Divider";
import Typography from "@components/Typography";
import Popover from "@components/Popover";
import { languages } from "@i18n/settings";
import { useAppSelector, useAppUtils } from "@/hooks";
import { classNames } from "@/utils";
import { LangProps } from "@/common.types";

import MenuItem from "./MenuItem";

const languagesLabels = {
  ar: "العربية",
  en: "english",
  tr: "turkish",
  fr: "french",
};

export default function ChangeLanguageMenu() {
  const { language } = useAppSelector((state) => state.ui);
  const { updateLanguage } = useAppUtils();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handlePopoverOpen = (event: React.ChangeEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const buttonClasses = classNames([
    "bg-none",
    "p-2",
    "enabled:hover:bg-slate-100",
  ]);

  return (
    <div>
      <Button
        onClick={(event) => event && handlePopoverOpen(event)}
        className={buttonClasses}
      >
        <div className="flex items-center justify-center gap-2 w-full h-full">
          <Typography
            as="p2"
            className="font-medium"
            text={language}
            uppercase
          />
          <Divider type="vertical" />
          <Icon name="globe" />
        </div>
      </Button>
      <Popover target={anchorEl} onClose={handlePopoverClose}>
        <div className="w-full py-1 flex flex-col gap-1">
          {languages.map((lng, index) => (
            <MenuItem
              key={`${lng}-chng-lng-${index}`}
              selected={language === lng}
              label={
                <Typography as="p2" text={languagesLabels[lng as LangProps]} />
              }
              onClick={() => {
                updateLanguage(lng as LangProps);
              }}
            />
          ))}
        </div>
      </Popover>
    </div>
  );
}
