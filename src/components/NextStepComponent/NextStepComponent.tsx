import React from 'react';
import './NextStepComponent.css';


interface NextStepComponentProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit?: any;
}

const NextStepComponent: React.FC<NextStepComponentProps> = ({ currentStep, setCurrentStep, handleSubmit }) => {
  const buttonName = currentStep === 4 ? 'Confirm' : 'Next Step';
  const buttonColor = currentStep === 4 ? '#6259ff' : '#02295a';
  const buttonPosition = currentStep === 1 ? 'flex-end' : 'space-between';

  const handleNextStep = (e:any) => {
    handleSubmit && handleSubmit(e);
    if(currentStep === 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  //TODO: IMPROVE THIS COMPONENT
  return (
    <div className='nextStep__container' style={{justifyContent:buttonPosition}}>
      {
        currentStep > 1 ? 
          <button className='backStep-button' 
          onClick={() => setCurrentStep(currentStep - 1)}> Go back
          </button>
          : null
      }
      <button  className='nextStep-button' style={{backgroundColor: buttonColor}} 
      onClick={handleNextStep}>{buttonName}
      </button>
    </div>
  );
}

export default NextStepComponent;
