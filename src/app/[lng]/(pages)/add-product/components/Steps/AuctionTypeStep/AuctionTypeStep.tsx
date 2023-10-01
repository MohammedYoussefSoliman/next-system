"use client";
import React from "react";
import { useStepperApi } from "@/components/Stepper";

import Step from "../../Step";

export default function AuctionTypeStep() {
  const { handleCompleted } = useStepperApi();
  return (
    <Step
      handleNext={() => {
        console.log("next");
      }}
      title="addProduct"
      subTitle="chooseAuction"
    >
      <div className="w-full">auction types</div>
    </Step>
  );
}
