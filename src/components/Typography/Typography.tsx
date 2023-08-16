"use client";

import React from "react";
import { TypographyProps } from "./Typography.types";
import tailwindConfig from "./typography.config";
import { classNames } from "@/utils";
import { useTranslation } from "@i18n/client";

const typographyTagGenerator = (tag: string) => {
  const paragraphRegex = /^p[1-3]$/;
  const validParagraph = paragraphRegex.test(tag);
  if (validParagraph) return "p";
  return tag;
};

export default function Typography({
  text,
  as,
  color,
  truncationWidth,
  lng,
  translationSource,
}: TypographyProps) {
  const { t } = useTranslation(lng || "ar", translationSource);
  // text configuration classes based on design system
  const configClasses = tailwindConfig({ as, color });
  // build the typography tag
  const Tag = React.useMemo(
    () => typographyTagGenerator(as || "p1"),
    [as]
  ) as keyof JSX.IntrinsicElements;

  // build classes
  const classes = classNames(configClasses, [
    truncationWidth && ["truncate", `w-[${truncationWidth}px]`],
  ]);

  return <Tag className={classes}>{t(text)}</Tag>;
}
