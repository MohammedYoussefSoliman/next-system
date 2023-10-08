"use client";
import React from "react";

import Step from "../../UI/Step";
import AuctionRadio from "../../UI/AuctionRadio";

export default function ProductTypeStep() {
  return (
    <Step
      handleNext={() => {
        console.log("next");
      }}
      title="addProduct"
      subTitle="productTypeTitle"
      stepNames={["productType"]}
    >
      <div className="w-full flex flex-col gap-8">
        <AuctionRadio
          name="productType"
          radios={[
            {
              label: "singleProduct",
              value: "single",
              icon: "product",
              description: "singleProductDefinition",
            },
            {
              label: "multipleProduct",
              value: "multi",
              icon: "multi-product",
              description: "multipleProductDefinition",
            },
          ]}
          validationRules={{ required: "productTypeRequired" }}
        />
      </div>
    </Step>
  );
}
