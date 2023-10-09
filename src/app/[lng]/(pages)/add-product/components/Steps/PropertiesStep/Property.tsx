import React from "react";
import loGet from "lodash/get";
import { useAxiosInstance } from "@/hooks";
import { Select, TextInput } from "@components/Inputs";
import { PropertyProps, Property } from "../../../AddProducts.types";

export default function Property({ property, control, watch }: PropertyProps) {
  const { get } = useAxiosInstance();
  const [subProperties, setSubProperties] = React.useState<Property[]>([]);

  const propertyValue = watch(property.name);

  const allValues = watch();

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
      <div className="flex flex-col gap-1">
        <Select
          name={property.name}
          label={property.name}
          placeholder={property.name}
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
              getProperties(value);
            }
          }}
        />

        {propertyValue?.value === "other" && (
          <TextInput
            label="other option"
            name={`${property.name}_other`}
            control={control}
            className="[&>input]:bg-white [&>input]:w-3/4"
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
                label={sub.name}
                placeholder={`Select ${sub.name}`}
                control={control}
                changeHandler={({ value }) => {
                  if (value !== "other") {
                    getProperties(value);
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
                  label="other option"
                  name={`${sub.name}_${property.name}_other`}
                  control={control}
                  className="[&>input]:bg-white [&>input]:w-3/4"
                />
              )}
            </>
          );
        })}
    </>
  );
}
