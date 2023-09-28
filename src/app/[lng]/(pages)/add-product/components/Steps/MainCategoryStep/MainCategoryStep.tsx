"use client";
import React from "react";
import Typography from "@/components/Typography";
import { StepperActions, useStepperApi } from "@/components/Stepper";

export default function AuctionTypeStep() {
  const { handleNext, handleBack } = useStepperApi();
  return (
    <div className="w-full flex flex-col gap-8 p-8">
      <Typography text="MainCategory" />
      <StepperActions
        handleBack={handleBack}
        handleNext={() => {
          handleNext();
        }}
      />
    </div>
  );
}
