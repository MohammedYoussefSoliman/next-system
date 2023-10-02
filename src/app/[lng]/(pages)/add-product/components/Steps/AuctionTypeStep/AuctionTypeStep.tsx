"use client";
import React from "react";
import { useStepperApi } from "@/components/Stepper";

import Step from "../../UI/Step";
import AuctionRadio from "../../UI/AuctionRadio";

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
      <div className="w-full">
        <AuctionRadio
          name="type"
          radios={[
            {
              label: "normalAuction",
              value: "normal",
              icon: "hammer",
              description: "normalAuctionDefinition",
            },
            {
              label: "fastAuction",
              value: "fast",
              icon: "flash",
              description: "fastAuctionDefinition",
            },
          ]}
        />
      </div>
    </Step>
  );
}
