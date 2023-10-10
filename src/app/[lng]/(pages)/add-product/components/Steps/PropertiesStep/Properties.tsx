import React from "react";
import { PropertiesProps } from "../../../AddProducts.types";
import Property from "./Property";
import PillRadio from "../../UI/PillRadio";

export default function Properties({
  properties,
  control,
  watch,
}: PropertiesProps) {
  return (
    <>
      {properties.map((property) => {
        if (property.options.length >= 5) {
          return (
            <Property
              key={property.name}
              property={property}
              control={control}
              watch={watch}
            />
          );
        }
        return (
          <PillRadio
            key={property.name}
            name={property.name}
            label={property.name}
            radios={property.options.map((opt) => ({
              label: opt.name,
              value: opt.id,
            }))}
          />
        );
      })}
    </>
  );
}
