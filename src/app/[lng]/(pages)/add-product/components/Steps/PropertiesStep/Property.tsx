import React from "react";
import loGet from "lodash/get";
import { useTranslation } from "@i18n/client";
import i18next from "i18next";
import { useAxiosInstance } from "@/hooks";
import { Select, TextInput } from "@components/Inputs";
import Typography from "@/components/Typography";
import { PropertyProps, Property } from "../../../AddProducts.types";
import resolveClientType from "./resolveClientType";
import DynamicInput from "./DynamicInput";

export default function Property({
  property,
  control,
  watch,
  type,
}: PropertyProps) {
  const lng = i18next.language;
  const { t } = useTranslation(lng);
  const { get } = useAxiosInstance();
  const [subProperties, setSubProperties] = React.useState<Property[]>([]);

  const getProperties = React.useCallback(
    async (id: number, isMainProperty?: boolean) => {
      const response = await get(`/option-properties/${id}`);
      let propertyId: number;
      const properties = loGet(response, "data", []);
      if (properties.length > 0) {
        propertyId = properties[0].id;
      }
      const foundProperty = subProperties.find(
        (item) => item.id === propertyId
      );

      if (isMainProperty) {
        setSubProperties([...response.data]);
      } else {
        if (foundProperty) {
          const updatedSubProperties = subProperties.filter(
            (property) => property.id !== propertyId
          );
          setSubProperties([...updatedSubProperties, ...response.data]);
        } else {
          setSubProperties((prevState) => [...prevState, ...response.data]);
        }
      }
    },
    [get, subProperties]
  );

  return (
    <>
      <DynamicInput
        watch={watch}
        control={control}
        name={property.name}
        options={property.options}
        id={property.id}
        getProperties={getProperties}
        type={type}
        mainOptionIdes={property.options.map((opt) => opt.id)}
      />
      {subProperties &&
        subProperties.map((sub) => {
          const subPropertyValue = watch(sub.name);
          return (
            <>
              <DynamicInput
                watch={watch}
                control={control}
                name={sub.name}
                options={sub.options}
                id={sub.id}
                getProperties={getProperties}
                type={resolveClientType(sub.type, sub.options.length)}
              />
            </>
          );
        })}
    </>
  );
}
