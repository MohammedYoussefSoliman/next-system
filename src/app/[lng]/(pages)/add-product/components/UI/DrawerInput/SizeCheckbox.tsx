import React from "react";
import { useFormContext } from "react-hook-form";
import { Check } from "../styles";
import Typography from "@/components/Typography";
import type { SizeCheckboxProps } from "../../../AddProducts.types";
import Icon from "@/components/Icon";
import colors from "tailwindcss/colors";
import { classNames } from "@/utils";

export default function SizeCheckbox({
  name,
  label,
  description,
  value,
  validationRules,
}: SizeCheckboxProps) {
  const { watch, register, clearErrors } = useFormContext();

  const registerInstance = register(name, { ...validationRules });
  const active = (watch(name) || []).includes(`${value}`);

  return (
    <button
      key={`${value}-${name}`}
      className="relative px-4 py-2 flex items-center gap-2  border-b border-b-gray-300 last-of-type:border-b-none"
    >
      <input
        type="checkbox"
        value={value}
        {...registerInstance}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={(event) => {
          clearErrors(name);
          registerInstance.onChange(event);
        }}
      />
      <Check className="h-6 w-6 rounded flex items-center" active={active}>
        {active && <Icon name="check" size={20} color={colors.white} />}
      </Check>
      <div className="flex flex-col items-start justify-start">
        <Typography
          text={label}
          color={active ? "warn" : "base"}
          className={classNames([active && "font-medium"])}
          capitalizeFirstLetter
        />
        {description && (
          <Typography
            as="p2"
            text={description}
            color={active ? "warn" : "base"}
            className={classNames([active && "font-medium"], ["text-start"])}
            capitalizeFirstLetter
          />
        )}
      </div>
    </button>
  );
}
