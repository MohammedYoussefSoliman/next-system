import React from "react";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { Select, TextInput } from "@components/Inputs";
import Typography from "@/components/Typography";
import { ListSelectProps } from "../../../AddProducts.types";

export default function ListSelect({
  id,
  selectedOption,
  name,
  getProperties,
  control,
  options,
  mainOptionIdes,
}: ListSelectProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);

  React.useEffect(() => {
    if (selectedOption) {
      getProperties(
        selectedOption.value as number,
        mainOptionIdes?.includes(selectedOption.value as number)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            getProperties(value, mainOptionIdes?.includes(value));
          }
        }}
      />

      {selectedOption?.value === "other" && (
        <TextInput placeholder={name} name={`${id}_other`} control={control} />
      )}
    </div>
  );
}
