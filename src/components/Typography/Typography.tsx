"use client";

import React from "react";
import i18next from "i18next";
import { classNames } from "@/utils";
import { useTranslation } from "@i18n/client";
import { TypographyProps } from "./Typography.types";
import tailwindConfig from "./typography.config";

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
  namespace,
  capitalizeFirstLetter,
  uppercase,
  hoverStyles,
}: TypographyProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng, namespace);
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
    capitalizeFirstLetter && "first-letter:uppercase",
    uppercase && "uppercase",
    hoverStyles && hoverStyles,
  ]);

  return <Tag className={classes}>{t(text)}</Tag>;
}
