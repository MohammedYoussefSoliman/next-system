import React from "react";
import { PropertiesProps } from "../../../AddProducts.types";
import Property from "./Property";

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
        />
      ))}
    </>
  );
}
