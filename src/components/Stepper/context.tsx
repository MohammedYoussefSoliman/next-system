"use client";
import React from "react";
import { StepsType, Status, AppContextInterface } from "./Stepper.types";

export const StepperStore = React.createContext<AppContextInterface>({
  steps: [],
  updateActiveStep: () => {},
  handleNext: () => {},
  handleBack: () => {},
  handleCompleted: () => {},
  activeStep: 0,
  completed: {},
});

const statusResolver = (steps: StepsType["steps"], type: "completed") => {
  let stepperStatus: Status = {};
  steps.forEach((step, index) => {
    stepperStatus = { ...stepperStatus, [index]: Boolean(step[type]) };
  });
  return stepperStatus;
};

export default function StepperContext({
  children,
  steps: currentSteps,
  currentStep,
}: StepsType) {
  const [steps] = React.useState<StepsType["steps"]>(currentSteps);
  const [activeStep, setActiveStep] = React.useState<number>(
    currentStep && currentStep < currentSteps.length ? currentStep : 0
  );
  const [completed, setCompleted] = React.useState<Status>(
    statusResolver(currentSteps, "completed")
  );

  const updateActiveStep = (index: number) => {
    setActiveStep(index);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((step) => step + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((step) => step - 1);
    }
  };
  const handleCompleted = (index: number, callback?: () => void) => {
    setCompleted((value) => ({ ...value, [index]: true }));
    if (callback) callback();
  };

  React.useEffect(() => {
    steps.forEach((step, stepIndex) => {
      if (currentStep && stepIndex < currentStep) {
        handleCompleted(stepIndex);
      }
    });
  }, [currentStep, steps]);

  const contextValues = React.useMemo(
    () => ({
      steps,
      updateActiveStep,
      handleNext,
      handleBack,
      handleCompleted,
      activeStep,
      completed,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeStep, completed, steps]
  );

  return (
    <StepperStore.Provider value={contextValues}>
      {children}
    </StepperStore.Provider>
  );
}
