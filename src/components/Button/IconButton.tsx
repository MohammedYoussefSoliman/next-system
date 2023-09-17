import React from "react";
import i18next from "i18next";
import colors from "tailwindcss/colors";
import Spinner from "@components/Spinner";
import Icon from "@components/Icon";
import { useTranslation } from "@i18n/client";
import { IconButtonProps } from "./button.types";
import tailwindConfig from "./iconButton.config";
import { classNames } from "@/utils";

// TODO
/**
 * Add loading setup
 * Add icon setup
 */

const resolveDisabledButton = (variant: IconButtonProps["variant"]) => {
  const disabledStyles = {
    primary: ["from-rose-200", "to-amber-200", "cursor-not-allowed"],
    secondary: ["bg-slate-100", "text-slate-400", "cursor-not-allowed"],
    transparent: ["text-slate-600", "cursor-not-allowed"],
  };
  return disabledStyles[variant || "primary"];
};
const resolveIconSize = (size: IconButtonProps["size"]) => {
  const iconSizes = {
    small: 20,
    medium: 32,
    large: 36,
    xLarge: 40,
  };
  return iconSizes[size || "medium"];
};

export default function IconButton({
  icon,
  width,
  size,
  variant,
  onClick,
  loading,
  disabled,
  namespace,
  className,
  iconColor,
  id,
  type,
}: IconButtonProps) {
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
      <div className="flex w-full gap-2 items-center justify-center">
        {loading ? (
          <>
            <Spinner
              topColor={colors.slate[400]}
              bottomColor={colors.slate[300]}
            />
            {t(typeof loading === "string" ? loading : "loading")}
          </>
        ) : (
          <Icon
            name={icon}
            size={resolveIconSize(size)}
            color={
              iconColor
                ? iconColor === "inherit"
                  ? undefined
                  : iconColor
                : variant === "primary"
                ? "white"
                : colors.rose[500]
            }
          />
        )}
      </div>
    </button>
  );
}
