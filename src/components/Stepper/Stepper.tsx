"use client";
import { classNames } from "@/utils";
import Provider from "./context";
import Panel from "./Panel";
import { StepsType } from "./Stepper.types";

export default function Stepper({
  steps,
  currentStep,
  className,
}: Omit<StepsType, "children">) {
  const classes = classNames(["w-full"], className);
  return (
    <Provider steps={steps} currentStep={currentStep}>
      <div className={classes}>
        {steps.map((step, index) => (
          <Panel value={index} key={`step-panel${index}`}>
            {step.children}
          </Panel>
        ))}
      </div>
    </Provider>
  );
}
