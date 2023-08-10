import { useState } from 'react';
import './App.css'
import FormComponent from './components/formComponent/FormComponent'
import SideComponent from './components/sideComponent/SideComponent'
import PlanComponent from './components/planComponent/PlanComponent';

const StepComponent = ({currentStep, setCurrentStep}) => {
  debugger
  console.log({currentStep})
  switch (currentStep) {
    case 1:
      return <FormComponent currentStep={currentStep} setCurrentStep={setCurrentStep} />;
    case 2:
      return <PlanComponent/>;
    default:
      return null;
  }
}

function App() {
  const [currentStep, setCurrentStep] = useState(2);


  return (
    <>
     <main className='app_container'>
      <div className='app'>
      <SideComponent currentStep={currentStep} />
      <StepComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      </div>
     </main>
    </>
  )
}

export default App
