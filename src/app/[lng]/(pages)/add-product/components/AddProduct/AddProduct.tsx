import React from "react";
import Stepper from "@/components/Stepper";
import AuctionTypeStep from "../Steps/AuctionTypeStep";
import MainCategoryStep from "../Steps/MainCategoryStep";

export default function AddProduct() {
  return (
    <div className="w-full">
      <Stepper
        steps={[
          {
            children: <AuctionTypeStep />,
          },
          {
            children: <MainCategoryStep />,
          },
        ]}
      ></Stepper>
    </div>
  );
}
