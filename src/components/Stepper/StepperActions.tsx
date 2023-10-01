"use client";
import React from "react";
import Progress from "@/components/Progress";
import { Button } from "@/components/Button";
import { StepperStore } from "./context";
import { StepperActionsType } from "./Stepper.types";

export default function StepperActions({
  handleNext,
  handleBack,
  prevButtonProps,
  nextButtonProps,
}: StepperActionsType) {
  const { steps, activeStep } = React.useContext(StepperStore);

  const progress = (activeStep + 1) / steps.length;

  return (
    <div className="w-full gap-3 flex  md:flex-row items-center">
      <Button
        disabled={activeStep === 0}
        variant="secondary"
        onClick={handleBack}
        className="flex-1 md:flex-none"
        {...prevButtonProps}
      >
        previous
      </Button>
      <div className="flex-none md:flex-1">
        <Progress progress={progress} />
      </div>
      <Button
        disabled={activeStep === steps.length - 1}
        onClick={handleNext}
        className="flex-1 md:flex-none"
        {...nextButtonProps}
      >
        next
      </Button>
    </div>
  );
}
