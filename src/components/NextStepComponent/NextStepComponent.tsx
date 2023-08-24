import React from 'react';


interface NextStepComponentProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit?: any;
}

const NextStepComponent: React.FC<NextStepComponentProps> = ({ currentStep, setCurrentStep, handleSubmit }) => {
  
  const handleNextStep = (e:any) => {
    if(currentStep === 1) {
      handleSubmit(e);
    }
    else if(currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div style={{textAlign:'end'}}>
      <button style={{backgroundColor:'#0f0fff',border:'none',padding:'5px',width:'88px'}} onClick={handleNextStep}>Next Step</button>
    </div>
  );
}

export default NextStepComponent;
