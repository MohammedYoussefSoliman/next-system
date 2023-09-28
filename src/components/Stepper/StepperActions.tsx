import React from "react";
import Progress from "@/components/Progress";
import { Button } from "@/components/Button";
import { StepperActionsType } from "./Stepper.types";

export default function StepperActions() {
  return (
    <div className="w-full gap-3 flex flex-col md:flex-row items-center">
      <Button variant="secondary">previous</Button>
      <div className="flex-1">
        <Progress progress={0.5} />
      </div>
      <Button>next</Button>
      StepperActions
    </div>
  );
}
