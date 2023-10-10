import React from "react";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { LabelProps } from "@components/Inputs/Inputs.types";

export default function Label({ label, required }: LabelProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);

  return (
    <label className="flex items-center">
      <span>{t(label)}</span>
      {required && <sup className="text-xs font-bold text-red-600">*</sup>}
    </label>
  );
}
