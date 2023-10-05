import React from "react";
import i18next from "i18next";
import NextLink from "next/link";
import colors from "tailwindcss/colors";
import Icon from "@components/Icon";
import { useTranslation } from "@i18n/client";
import { LinkButtonProps } from "./button.types";
import tailwindConfig from "./button.config";
import { classNames } from "@/utils";

const resolveIconSize = (size: LinkButtonProps["size"]) => {
  const iconSizes = {
    small: 16,
    medium: 24,
    large: 24,
    xLarge: 24,
  };
  return iconSizes[size || "medium"];
};

export default function LinkButton({
  to,
  children,
  onClick,
  icon,
  width,
  size,
  variant = "primary",
  namespace,
  className,
  id,
}: LinkButtonProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng, namespace);

  const classes = React.useMemo(
    () =>
      classNames(
        tailwindConfig({
          variant,
          size,
          width,
        }),
        ["hover:from-rose-600", "hover:to-amber-600"],
        className
      ),
    [variant, size, width, className]
  );

  return (
    <NextLink
      onClick={onClick}
      id={id}
      className={classes}
      href={`/${lng}/${to}`}
    >
      <div className="flex w-full h-full gap-2 items-center justify-center">
        {icon ? (
          <>
            <Icon
              name={icon}
              size={resolveIconSize(size)}
              color={variant === "primary" ? "white" : colors.rose[500]}
            />
            {typeof children === "string" ? (
              <p className={`!leading-5`}>{t(children)}</p>
            ) : (
              children
            )}
          </>
        ) : typeof children === "string" ? (
          <p className={`!leading-5`}>{t(children)}</p>
        ) : (
          children
        )}
      </div>
    </NextLink>
  );
}
