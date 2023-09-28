import Provider from "./context";
import Panel from "./Panel";
import { StepsType } from "./Stepper.types";

export default function Stepper({
  steps,
  currentStep,
}: Omit<StepsType, "children">) {
  return (
    <Provider steps={steps} currentStep={currentStep}>
      <div className="flex flex-col w-full gap-3 md:gap-6">
        <div className="w-full">
          {steps.map((step, index) => (
            <Panel value={index} key={`step-panel${index}`}>
              {step.children}
            </Panel>
          ))}
        </div>
        <div className="w-full">stepper action</div>
      </div>
    </Provider>
  );
}
