"use client";
import React from "react";
import i18next from "i18next";
import { classNames } from "@/utils";
import { useTranslation } from "@i18n/client";
import { TypographyProps } from "./Typography.types";
import tailwindConfig from "./typography.config";

const typographyTagGenerator = (tag: string): keyof JSX.IntrinsicElements => {
  const paragraphRegex = /^p[1-3]$/;
  const validParagraph = paragraphRegex.test(tag);
  if (validParagraph) return "p";
  return tag as keyof JSX.IntrinsicElements;
};

export default function Typography({
  text,
  children,
  as,
  color,
  truncationWidth,
  namespace,
  capitalizeFirstLetter,
  uppercase,
  hoverStyles,
  className,
}: TypographyProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng, namespace);
  // text configuration classes based on design system
  const configClasses = tailwindConfig({ as, color });
  // build the typography tag
  const Tag = React.useMemo(() => typographyTagGenerator(as || "p1"), [as]);

  let content;

  if (children) {
    content = typeof children === "string" ? t(children) : children;
  } else {
    content = t(`${text}`);
  }
  // build classes
  const classes = classNames(configClasses, [
    truncationWidth && ["truncate", `w-[${truncationWidth}px]`, "block"],
    capitalizeFirstLetter && "first-letter:uppercase",
    uppercase && "uppercase",
    hoverStyles && hoverStyles,
    className,
  ]);

  return <Tag className={classes}>{content}</Tag>;
}
