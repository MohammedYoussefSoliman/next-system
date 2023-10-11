import React from "react";
import { PropertiesProps } from "../../../AddProducts.types";
import Property from "./Property";
import resolveClientType from "./resolveClientType";

export default function Properties({
  properties,
  control,
  watch,
}: PropertiesProps) {
  return (
    <>
      {properties.map((property) => (
        <Property
          key={property.name}
          property={property}
          control={control}
          watch={watch}
          type={resolveClientType(property.type, property.options.length)}
        />
      ))}
    </>
  );
}
