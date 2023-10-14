import { Property } from "../../../AddProducts.types";

const resolveClientType = (
  propertyType: Property["type"],
  optionsLength: number
) => {
  console.log({ propertyType });
  if (propertyType === "country_made") return "country";
  if (propertyType === "list" && optionsLength < 5) {
    return "radio";
  }
  return propertyType;
};

export default resolveClientType;
