import React from "react";
import loGet from "lodash/get";
import { useFormContext } from "react-hook-form";
import Error from "@/components/Inputs/Error";
import { RadioPill } from "./styles";
import Typography from "@/components/Typography";
import type { RadioPillProps } from "../../AddProducts.types";
export default function RadioPil({
  name,
  label,
  radios,
  validationRules,
}: RadioPillProps) {
  const {
    watch,
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const error = errors[name];

  const registerInstance = register(name, { ...validationRules });

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 items-center">
        <Typography as="p2" text={label} />
        <Typography as="p2" text="optional" color="light" />
      </div>
      <div className="flex gap-2 md:gap-4">
        {radios.map(({ value, label }) => {
          const active = watch(name) === value;
          return (
            <RadioPill
              key={`${value}-${name}`}
              className="relative px-4 py-1 rounded-2xl flex items-center justify-center"
              active={active}
            >
              <input
                type="radio"
                value={value}
                {...registerInstance}
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(event) => {
                  clearErrors(name);
                  registerInstance.onChange(event);
                }}
              />
              <Typography
                as="p2"
                text={label}
                color={active ? "white" : "light"}
                capitalizeFirstLetter
              />
            </RadioPill>
          );
        })}
      </div>
      {error?.message && (
        <Error error={loGet(error, "message", "") as string} />
      )}
    </div>
  );
}
