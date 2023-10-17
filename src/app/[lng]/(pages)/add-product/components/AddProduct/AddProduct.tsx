import React from "react";
import Stepper from "@/components/Stepper";
import FormContext from "../Form/FormContext";
import AuctionTypeStep from "../Steps/AuctionTypeStep";
import ProductTypeStep from "../Steps/ProductTypeStep";
import MainCategoryStep from "../Steps/MainCategoryStep";
import SubCategoriesStep from "../Steps/SubCategoriesStep";
import PropertiesStep from "../Steps/PropertiesStep";
import MediaStep from "../Steps/MediaStep";

export default function AddProduct() {
  return (
    <div className="w-full h-full">
      <FormContext>
        <Stepper
          steps={[
            {
              children: <AuctionTypeStep />,
            },
            {
              children: <ProductTypeStep />,
            },
            {
              children: <MainCategoryStep />,
            },
            {
              children: <SubCategoriesStep />,
            },
            {
              children: <PropertiesStep />,
            },
            {
              children: <MediaStep />,
            },
          ]}
          className="h-full"
        />
      </FormContext>
    </div>
  );
}
