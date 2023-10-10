import React from "react";
import loGet from "lodash/get";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { useAxiosInstance } from "@/hooks";
import { Select, TextInput } from "@components/Inputs";
import Typography from "@/components/Typography";
import { PropertyProps, Property } from "../../../AddProducts.types";

export default function Property({ property, control, watch }: PropertyProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);
  const { get } = useAxiosInstance();
  const [subProperties, setSubProperties] = React.useState<Property[]>([]);

  const propertyValue = watch(property.name);

  const getProperties = React.useCallback(
    async (id: number) => {
      const response = await get(`/option-properties/${id}`);
      let propertyName = "";
      const properties = loGet(response, "data", []);
      if (properties.length > 0) {
        propertyName = properties[0].name;
      }
      const foundProperty = subProperties.find(
        (item) => item.name === propertyName
      );

      if (foundProperty) {
        const updatedSubProperties = subProperties.filter(
          (property) => property.name !== propertyName
        );
        setSubProperties([...updatedSubProperties, ...response.data]);
      } else {
        setSubProperties((prevState) => [...prevState, ...response.data]);
      }
    },
    [get, subProperties]
  );

  return (
    <>
      <div className="flex flex-col gap-4">
        <Select
          name={property.name}
          placeholder={
            <div className="flex items-center gap-1">
              <Typography as="p2" text={property.name} />{" "}
              <Typography as="p2" text={t("optional")} color="light" />
            </div>
          }
          control={control}
          options={
            [
              ...property.options.map((option) => ({
                label: option.name,
                value: option.id,
              })),
              { label: "other", value: "other" },
            ] || []
          }
          changeHandler={({ value }) => {
            if (value !== "other") {
              const selectedOption = property.options.find(
                (opt) => opt.id == value
              );
              if (selectedOption?.has_child) {
                getProperties(value);
              }
            }
          }}
        />

        {propertyValue?.value === "other" && (
          <TextInput
            placeholder={property.name}
            name={`${property.name}_other`}
            control={control}
          />
        )}
      </div>
      {subProperties &&
        subProperties.map((sub) => {
          const subPropertyValue = watch(sub.name);
          return (
            <>
              <Select
                key={sub.name}
                name={sub.name}
                placeholder={
                  <div className="flex items-center gap-1">
                    <Typography as="p2" text={sub.name} />
                    <Typography as="p2" text={t("optional")} color="light" />
                  </div>
                }
                control={control}
                changeHandler={({ value }) => {
                  if (value !== "other") {
                    const selectedOption = sub.options.find(
                      (opt) => opt.id == value
                    );
                    if (selectedOption?.has_child) {
                      getProperties(value);
                    }
                  }
                }}
                options={
                  [
                    ...sub.options.map((option) => ({
                      label: option.name,
                      value: option.id,
                    })),
                    { label: "other", value: "other" },
                  ] || []
                }
              />
              {subPropertyValue?.value === "other" && (
                <TextInput
                  name={`${sub.name}_${property.name}_other`}
                  control={control}
                  placeholder={sub.name}
                />
              )}
            </>
          );
        })}
    </>
  );
}
