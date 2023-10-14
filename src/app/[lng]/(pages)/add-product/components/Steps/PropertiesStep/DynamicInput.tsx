import React from "react";
import loGet from "lodash/get";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { Select, TextInput, DatePicker } from "@components/Inputs";
import Typography from "@/components/Typography";
import { DynamicPropsType } from "../../../AddProducts.types";
import PillRadio from "../../UI/PillRadio";
import DrawerInput from "../../UI/DrawerInput";

export default function DynamicInput({
  id,
  watch,
  type,
  name,
  getProperties,
  control,
  options,
  mainOptionIdes,
}: DynamicPropsType) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);
  const propertyValue = watch(`${id}`);

  switch (type) {
    case "list":
      return (
        <div className="flex flex-col gap-4">
          <Select
            name={`${id}`}
            placeholder={
              <div className="flex items-center gap-1">
                <Typography as="p2" text={name} />{" "}
                <Typography as="p2" text={t("optional")} color="light" />
              </div>
            }
            control={control}
            options={
              [
                ...options.map((option) => ({
                  label: option.name,
                  value: option.id,
                })),
                { label: "other", value: "other" },
              ] || []
            }
            changeHandler={({ value }) => {
              if (value !== "other") {
                const selectedOption = options.find((opt) => opt.id == value);
                getProperties(value, mainOptionIdes?.includes(value));
              }
            }}
          />

          {propertyValue?.value === "other" && (
            <TextInput
              placeholder={name}
              name={`${id}_other`}
              control={control}
            />
          )}
        </div>
      );
    case "radio":
      return (
        <PillRadio
          name={`${id}`}
          label={name}
          radios={options.map((opt) => ({
            label: opt.name,
            value: opt.id,
          }))}
        />
      );
    case "size":
      return <DrawerInput name={`${id}`} label={name} />;
    case "country":
      return <div>country country</div>;
    case "date":
      return (
        <DatePicker
          label={
            <div className="flex items-center gap-1">
              <Typography as="p2" text={name} />{" "}
              <Typography as="p2" text={t("optional")} color="light" />
            </div>
          }
          control={control}
          name={`${id}`}
          onChange={(value) => console.log(value)}
        />
      );

    case "text":
    default:
      return <TextInput control={control} name={`${id}`} placeholder={name} />;
  }
}
