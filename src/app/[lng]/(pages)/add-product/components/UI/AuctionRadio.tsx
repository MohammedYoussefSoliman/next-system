import React from "react";
import loGet from "lodash/get";
import colors from "tailwindcss/colors";
import { useFormContext } from "react-hook-form";
import Icon from "@components/Icon";
import Error from "@/components/Inputs/Error";
import { StyledRadio } from "./styles";
import Typography from "@/components/Typography";
import type { AuctionRadioProps } from "../../AddProducts.types";
export default function AuctionRadio({
  name,
  radios,
  validationRules,
}: AuctionRadioProps) {
  const {
    watch,
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const error = errors[name];

  const registerInstance = register(name, { ...validationRules });

  return (
    <div className="w-full flex-col gap-1">
      <div className="w-full flex flex-col md:grid grid-cols-2 gap-2 md:gap-4">
        {radios.map(({ value, icon, description, label }) => {
          const active = watch(name) === value;
          return (
            <StyledRadio
              key={`${value}-${name}`}
              className="relative p-1 rounded-2xl flex gap-2 flex-1 self-stretch"
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
              <div className="p-1 flex-1 flex gap-2 self-stretch">
                <div className="icon--wrapper rounded-xl flex items-center justify-center w-11 h-11">
                  <Icon
                    name={icon}
                    color={active ? colors.orange[500] : colors.gray[500]}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <Typography as="h6" text={label} />
                  {description && (
                    <Typography as="p2" text={description} color="light" />
                  )}
                </div>
              </div>
              <div className="radio--circle">
                <div className="inner--circle" />
              </div>
            </StyledRadio>
          );
        })}
      </div>
      {error?.message && (
        <Error error={loGet(error, "message", "") as string} />
      )}
    </div>
  );
}
