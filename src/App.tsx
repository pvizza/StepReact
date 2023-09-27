import { useState } from 'react';
import './App.css'
import FormComponent from './components/formComponent/FormComponent'
import SideComponent from './components/sideComponent/SideComponent'
import PlanComponent from './components/planComponent/PlanComponent';
import AddOnsComponent from './components/addOnsComponent/addOnsCOmponent';
import SumarryComponent from './components/summaryComponent/SummaryComponent';
import { PaymentProvider } from '../context/paymetsContext';
import ConfirmingComponent from './components/confirmingComponent/ConfirmingComponent';

const StepComponent = ({currentStep, setCurrentStep}:PlanComponentProps) => {
  console.log({currentStep})
  switch (currentStep) {
    case 1:
      return <FormComponent currentStep={currentStep} setCurrentStep={setCurrentStep} />;
    case 2:
      return <PlanComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>;
    case 3: 
      return  <AddOnsComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>;  
    case 4:
      return <SumarryComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>;
    case 5:
      return <ConfirmingComponent/>;
    default:
      return null; //error page
  }
}

function App() {
  const [currentStep, setCurrentStep] = useState(1);


  return (
    <>
     <main className='app_container'>
      <div className='app'>
      <PaymentProvider>
        <SideComponent currentStep={currentStep} />
        <StepComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      </PaymentProvider>
      </div>
     </main>
    </>
  )
}

export default App
