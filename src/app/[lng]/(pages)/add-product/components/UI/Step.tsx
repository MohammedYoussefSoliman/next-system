"use client";
import React from "react";
import isEmpty from "lodash/isEmpty";
import isArray from "lodash/isArray";
import Typography from "@/components/Typography";
import { useFormContext } from "react-hook-form";
import Paper from "@/components/Paper";
import { StepperActions, useStepperApi } from "@/components/Stepper";
import { StepProps } from "../../AddProducts.types";

export default function Step({
  title,
  subTitle,
  children,
  handleNext,
  stepNames,
}: StepProps) {
  const { handleNext: handleStepperNext, handleBack } = useStepperApi();
  const {
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleStepError = React.useCallback(() => {
    if (!isEmpty(errors)) {
      const firstErrorKey = Object.keys(errors)[0];
      const firstError = errors[firstErrorKey];
      let firstErrorFound;
      if (isArray(firstError)) {
        firstErrorFound = firstError[0];
      } else {
        firstErrorFound = firstError;
      }
      if (firstErrorFound) {
        const input = document.getElementsByName(firstErrorFound.ref.name)[0];
        input?.parentElement?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [errors]);

  return (
    <div className="w-full md:w-[1200px] flex flex-col mx-auto gap-8 justify-between h-full">
      <div className="h-full flex flex-col gap-8 px-4 md:px-40">
        <Paper className="flex flex-col justify-between flex-1 px-4 py-6 md:px-6 md:py-8 md:mb-8">
          <div className="flex flex-col w-full gap-2 md:gap-8">
            {title && <Typography className="mb-2" as="h2" text={title} />}
            {subTitle && <Typography as="h6" text={subTitle} />}
            {children}
          </div>
          <div className="w-full hidden md:block">
            <StepperActions
              handleBack={handleBack}
              handleNext={async () => {
                let results = true;
                if (stepNames) {
                  results = await trigger(stepNames);
                }
                console.log(results);
                if (results) {
                  if (handleNext) handleNext();
                  handleStepperNext();
                }
              }}
            />
          </div>
        </Paper>
      </div>
      <Paper className="mt-auto rounded-none md:hidden">
        <StepperActions
          handleBack={handleBack}
          handleNext={async () => {
            let results = true;
            if (stepNames) {
              results = await trigger(stepNames);
              handleStepError();
            }
            if (results) {
              if (handleNext) handleNext();
              handleStepperNext();
            }
          }}
        />
      </Paper>
    </div>
  );
}
