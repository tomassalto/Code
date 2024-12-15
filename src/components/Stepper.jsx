"use client";
import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Step1 from "./StepOne";
import Step2 from "./Step2";
import Step3 from "./Step3";

const steps = ["Paso 1", "Paso 2", "Paso 3"];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex  gap-[10px]">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="flex-shrink-0"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="flex">
        {activeStep === 0 && <Step1 onStepChange={handleNext} />}
        {activeStep === 1 && <Step2 onStepChange={handleNext} />}
        {activeStep === 2 && <Step3 />}
      </div>
    </div>
  );
};

export default StepperComponent;
