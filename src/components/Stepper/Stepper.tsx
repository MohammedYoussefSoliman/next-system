"use client";
import Provider from "./context";
import Panel from "./Panel";
import { StepsType } from "./Stepper.types";

export default function Stepper({
  steps,
  currentStep,
}: Omit<StepsType, "children">) {
  return (
    <Provider steps={steps} currentStep={currentStep}>
      <div className="w-full">
        {steps.map((step, index) => (
          <Panel value={index} key={`step-panel${index}`}>
            {step.children}
          </Panel>
        ))}
      </div>
    </Provider>
  );
}
