import * as React from "react";

export interface StepperProps {
  title?: string;
  nextStepTitle?: string;
  steps?: number;
  activeStep?: number;
}

export default function Stepper(props: React.PropsWithChildren<StepperProps>) {
  const {
    title = "Nombre del paso",
    nextStepTitle = "Nombre del paso 3",
    steps = 5,
    activeStep = 2,
  } = props;

  return (
    <>
      <div className="stepper">
        <p className="step-title">{title}</p>
        <p className="step-next">Paso siguiente: {nextStepTitle}</p>
        <div className="steps">
          {Array.from({length: steps}, (_, index) => (
            <div
              key={index}
              className={`step ${index <= activeStep - 1 ? "active" : ""}`}
            ></div>
          ))}
        </div>
        <span className="step-text">
          Paso {activeStep} de {steps}
        </span>
      </div>
    </>
  );
}
