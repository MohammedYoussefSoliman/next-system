import React from "react";
import Stepper from "@/components/Stepper";
import FormContext from "../Form/FormContext";
import AuctionTypeStep from "../Steps/AuctionTypeStep";
import MainCategoryStep from "../Steps/MainCategoryStep";
import MainSubCategoryStep from "../Steps/MainSubCategoryStep";

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
              children: <MainCategoryStep />,
            },
            {
              children: <MainSubCategoryStep />,
            },
          ]}
          className="h-full"
        />
      </FormContext>
    </div>
  );
}
