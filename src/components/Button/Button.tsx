import React from "react";
import i18next from "i18next";
import colors from "tailwindcss/colors";
import Spinner from "@components/Spinner";
import Icon from "@components/Icon";
import { useTranslation } from "@i18n/client";
import { ButtonProps } from "./button.types";
import tailwindConfig from "./button.config";
import { classNames } from "@/utils";

// TODO
/**
 * Add loading setup
 * Add icon setup
 */

const resolveDisabledButton = (variant: ButtonProps["variant"]) => {
  const disabledStyles = {
    primary: ["from-rose-200", "to-amber-200", "cursor-not-allowed"],
    secondary: ["bg-slate-100", "text-slate-400", "cursor-not-allowed"],
    transparent: ["text-slate-600", "cursor-not-allowed"],
  };
  return disabledStyles[variant || "primary"];
};
const resolveIconSize = (size: ButtonProps["size"]) => {
  const iconSizes = {
    small: 16,
    medium: 16,
    large: 24,
    xLarge: 24,
  };
  return iconSizes[size || "medium"];
};

export default function Button({
  children,
  icon,
  width,
  size,
  variant,
  onClick,
  loading,
  disabled,
  namespace,
  className,
  id,
  type,
}: ButtonProps) {
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
        [(disabled || loading) && resolveDisabledButton(variant)],
        className
      ),
    [variant, size, width, disabled, loading, className]
  );
  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled || Boolean(loading)}
    >
      <div className="flex w-full h-full gap-2 items-center justify-center mt-1.5">
        {loading ? (
          <>
            <Spinner
              topColor={colors.slate[400]}
              bottomColor={colors.slate[300]}
            />
            <p>{t(typeof loading === "string" ? loading : "loading")}</p>
          </>
        ) : icon ? (
          <>
            <Icon
              name={icon}
              size={resolveIconSize(size)}
              color={variant === "primary" ? "white" : colors.rose[500]}
            />
            {typeof children === "string" ? <p>{t(children)}</p> : children}
          </>
        ) : typeof children === "string" ? (
          <p>{t(children)}</p>
        ) : (
          children
        )}
      </div>
    </button>
  );
}
