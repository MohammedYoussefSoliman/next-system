"use client";
import React from "react";
import { useStepperApi } from "@/components/Stepper";

import Step from "../../UI/Step";

export default function AuctionTypeStep() {
  const { handleCompleted } = useStepperApi();
  return (
    <Step
      handleNext={() => {
        console.log("next");
      }}
      title="addProduct"
      subTitle="chooseMainCategory"
    >
      <div className="w-full">choose main category</div>
    </Step>
  );
}
