import { useState } from 'react';
import './App.css'
import FormComponent from './components/formComponent/FormComponent'
import SideComponent from './components/sideComponent/SideComponent'
import PlanComponent from './components/planComponent/PlanComponent';
import AddOnsComponent from './components/addOnsComponent/addOnsCOmponent';

const StepComponent = ({currentStep, setCurrentStep}:PlanComponentProps) => {
  debugger
  console.log({currentStep})
  switch (currentStep) {
    case 1:
      return <FormComponent currentStep={currentStep} setCurrentStep={setCurrentStep} />;
    case 2:
      return <PlanComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>;
    case 3: 
    return  <AddOnsComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>;  
    default:
      return null;
  }
}

function App() {
  const [currentStep, setCurrentStep] = useState(3);


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
