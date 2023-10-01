"use client";
import React from "react";
import Typography from "@/components/Typography";
import Container from "@/components/Container";
import Paper from "@/components/Paper";
import { StepperActions, useStepperApi } from "@/components/Stepper";
import { StepProps } from "../AddProducts.types";

export default function Step({
  title,
  subTitle,
  children,
  handleNext,
}: StepProps) {
  const { handleNext: handleStepperNext, handleBack } = useStepperApi();
  return (
    <div className="flex flex-col w-full gap-8 justify-between h-full">
      <Container className="h-full flex flex-col gap-8 px-4 md:px-40">
        <Paper className="flex flex-col justify-between flex-1 px-4 py-6 md:px-6 md:py-8 md:mb-8">
          <div className="flex flex-col w-full gap-2 md:gap-8">
            {title && <Typography className="mb-2" as="h2" text={title} />}
            {subTitle && <Typography as="h4" text={subTitle} />}
            {children}
          </div>
          <div className="w-full hidden md:block">
            <StepperActions
              handleBack={handleBack}
              handleNext={() => {
                handleStepperNext();
              }}
            />
          </div>
        </Paper>
      </Container>
      <Paper className="mt-auto rounded-none md:hidden">
        <StepperActions
          handleBack={handleBack}
          handleNext={() => {
            handleNext();
            handleStepperNext();
          }}
        />
      </Paper>
    </div>
  );
}
