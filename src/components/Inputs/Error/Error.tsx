import React from "react";
import i18next from "i18next";
import { useTranslation } from "@i18n/client";

import { ErrorProps } from "../Inputs.types";

export default function Error({ error }: ErrorProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);

  return (
    <p className="m-0 xs:text-xs md:text-sm first-letter:uppercase text-red-600 font-medium">
      {t(error)}
    </p>
  );
}
