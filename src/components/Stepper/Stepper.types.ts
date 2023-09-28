import React from "react";

export type Status = {
  [key: number]: boolean;
};

export interface StepperAPI {
  updateActiveStep: (value: number) => void;
  handleNext: (callback?: () => void) => void;
  handleBack: (callback?: () => void) => void;
  handleCompleted: (index: number, callback?: () => void) => void;
  activeStep: number;
  completed?: Status;
  isActiveStep: boolean;
  index: number;
}

export type StepType = {
  completed?: boolean;
  readonly?: boolean;
  children: React.ReactNode | ((stepperApi: StepperAPI) => React.ReactNode);
};

export type StepsType = {
  steps: StepType[];
  children: React.ReactNode;
  readOnly?: boolean;
  currentStep?: number;
};

export type StepperActionsType = {
  completed: Status;
  stepLength: number;
  handleNext: (callback?: () => void) => void;
  handleBack: (callback?: () => void) => void;
  handleCompleted: (index: number, callback?: () => void) => void;
};

export interface AppContextInterface
  extends Omit<StepperAPI, "isActiveStep" | "index"> {
  steps: StepsType["steps"];
}

export type PanelType = {
  value: number;
  children:
    | React.ReactNode
    | ((
        stepperApi: Omit<AppContextInterface, "steps"> & {
          isActiveStep: boolean;
          index: number;
        }
      ) => React.ReactNode);
};
