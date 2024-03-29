import React from "react";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { Select, TextInput, DatePicker } from "@components/Inputs";
import Typography from "@/components/Typography";
import { DynamicPropsType } from "../../../AddProducts.types";
import PillRadio from "../../UI/PillRadio";
import DrawerInput from "../../UI/DrawerInput";
import ListSelect from "./ListSelect";
import SelectCountry from "./SelectCountry";

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
        <ListSelect
          id={id}
          control={control}
          name={name}
          getProperties={getProperties}
          mainOptionIdes={mainOptionIdes}
          options={options}
          selectedOption={propertyValue}
        />
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
      return <SelectCountry name={`${id}`} control={control} />;
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
        />
      );

    case "text":
    default:
      return <TextInput control={control} name={`${id}`} placeholder={name} />;
  }
}
