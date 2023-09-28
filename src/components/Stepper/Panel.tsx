import React from "react";
import { StepperStore } from "./context";
import { PanelType } from "./Stepper.types";
import { StyledPanel } from "./Stepper.styles";

export default function StepperPanel({ children, value }: PanelType) {
  const {
    activeStep,
    updateActiveStep,
    handleCompleted,
    handleBack,
    handleNext,
    completed,
  } = React.useContext(StepperStore);

  if (activeStep !== value) return null;

  return (
    <StyledPanel>
      {typeof children === "function"
        ? children({
            activeStep,
            updateActiveStep,
            handleCompleted,
            handleBack,
            handleNext,
            completed,
            isActiveStep: activeStep === value,
            index: value,
          })
        : children}
    </StyledPanel>
  );
}
