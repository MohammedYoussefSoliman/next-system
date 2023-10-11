import React from "react";
import Stepper from "@/components/Stepper";
import FormContext from "../Form/FormContext";
import AuctionTypeStep from "../Steps/AuctionTypeStep";
import ProductTypeStep from "../Steps/ProductTypeStep";
import MainCategoryStep from "../Steps/MainCategoryStep";
import SubCategoriesStep from "../Steps/SubCategories";
import PropertiesStep from "../Steps/PropertiesStep";

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
          ]}
          className="h-full"
        />
      </FormContext>
    </div>
  );
}
