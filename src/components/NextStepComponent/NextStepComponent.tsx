import React from 'react';


interface NextStepComponentProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const NextStepComponent: React.FC<NextStepComponentProps> = ({ currentStep, setCurrentStep }) => {
  const handleNextStep = () => {
    if(currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
}

export default NextStepComponent;
